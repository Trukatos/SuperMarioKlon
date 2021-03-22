var loadLevelHandler;
var gridHandler;

function setupCollision(levelSpec, level) {
  const mergedTiles = levelSpec.layers.reduce((mergedTiles, layerSpec) => {
    return mergedTiles.concat(layerSpec.tiles);
  }, []);
  const collisionGrid = createCollisionGrid(mergedTiles, levelSpec.patterns);
  level.setCollisionGrid(collisionGrid);
}

function setupBackgrounds(levelSpec, level, backgroundSprites) {
  levelSpec.layers.forEach(layer => {
    const backgroundGrid = createBackgroundGrid(layer.tiles, levelSpec.patterns);
    const backgroundLayer = createBackgroundLayer(level, backgroundGrid, backgroundSprites);
    level.comp.layers.push(backgroundLayer);
  });
}

function setupEntities(levelSpec, level, entityFactory) {
//entitySpec
  levelSpec.entities.forEach(({name, pos: [x, y], item}) => {
    const createEntity = entityFactory[name];
    const entity = createEntity();
    entity.pos.set(x, y);
    entity.startPos.set(x, y);
    if(item) {
      entity.item = item;
    }
    level.entities.add(entity);
  });
  const spriteLayer = createSpriteLayer(level.entities);
  level.comp.layers.push(spriteLayer);
}

function createLevelLoader(entityFactory) {
  loadLevelHandler = function loadLevel(w, l) {
    return loadJSONLevel(w, l)
    .then(levelSpec => Promise.all([
      levelSpec,
      loadSpriteSheet(levelSpec.spriteSheet)
    ]))
    .then(([levelSpec, backgroundSprites]) => {
      const level = new Level(levelSpec.width, levelSpec.height);

      setupCollision(levelSpec, level);
      setupBackgrounds(levelSpec, level, backgroundSprites);
      setupEntities(levelSpec, level, entityFactory);

      return level; 
    });
  }
  return loadLevelHandler;
}

function createCollisionGrid(tiles, patterns) {
  const grid = new Matrix();

  expandTiles(tiles, patterns).forEach(({tile, x, y}) => {
    grid.set(x, y, {name: tile.name, type: tile.type, item: tile.item, warp: tile.warp});
  });

  return grid;
}

function createBackgroundGrid(tiles, patterns) {
  const grid = new Matrix();

  expandTiles(tiles, patterns).forEach(({tile, x, y}) => {
    grid.set(x, y, {name: tile.name, item: tile.item, warp: tile.warp});
  });

  gridHandler = grid;
  gridHandler.usedTiles = [];
  return gridHandler;
}

function expandSpan(xStart, xLen, yStart, yLen) {
  const coords = [];
  const xEnd = xStart + xLen;
  const yEnd = yStart + yLen;
  for(var x = xStart; x < xEnd; ++x) {
    for(var y = yStart; y < yEnd; ++y) {
      coords.push({x, y});
    }
  }
  return coords;
}

function expandRange(range) {
  if (range.length === 4) {
    const [xStart, xLen, yStart, yLen] = range;
    return expandSpan(xStart, xLen, yStart, yLen);

  } else if (range.length === 3) {
    const [xStart, xLen, yStart] = range;
    return expandSpan(xStart, xLen, yStart, 1);
  
  } else if (range.length === 2) {
    const [xStart, yStart] = range;
    return expandSpan(xStart, 1, yStart, 1);
  }
}

function expandRanges(ranges) {
  const items = [];
  ranges.forEach(range => {
    expandRange(range).forEach(item => {
      items.push(item);
    });
  });
  return items;
}

function expandTiles(tiles, patterns, offsetX = 0, offsetY = 0) {
  const expandedTiles = [];
  function walkTiles(tiles, offsetX, offsetY) {
    tiles.forEach(tile => {
      const coords = expandRanges(tile.ranges);
      coords.forEach(({x, y}) => {
        const derivedX = x + offsetX;
        const derivedY = y + offsetY;
        if(tile.pattern) {
	  const tiles = patterns[tile.pattern].tiles;
	  if(tile.warp) {
            const warp = tile.warp;
            tiles.forEach(tile => {
              tile.warp = warp;
            });
          }
	  walkTiles(tiles, derivedX, derivedY);
        } else {
	  expandedTiles.push({
	    tile,
	    x: derivedX,
	    y: derivedY,
	  });
        }
      });
    });
  }
  walkTiles(tiles, 0, 0);
  return expandedTiles;
}