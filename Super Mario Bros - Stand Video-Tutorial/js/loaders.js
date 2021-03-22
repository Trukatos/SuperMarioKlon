const levels = [];
levels.push([]);
const sprites = new Object();

function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
}

function loadJSONLevel(w, l) {
  return Promise.resolve().then(() => {
    return JSON.parse(levels[w-1][l-1]);
  });  
}


function loadJSONSprites(name) {
  return JSON.parse(sprites[name]);
}



function loadSpriteSheet(name) {
  return Promise.all([
    loadJSONSprites(name),
    loadImage(loadJSONSprites(name).imageURL),
  ])
  .then(([sheetSpec, image]) => {
    const sprites = new SpriteSheet(
			image,
			sheetSpec.tileW,
			sheetSpec.tileH);
    if(sheetSpec.tiles) {
      sheetSpec.tiles.forEach(tileSpec => {
        sprites.defineTile(
	  tileSpec.name,
	  tileSpec.index[0],
	  tileSpec.index[1]);
      });
    }

    if(sheetSpec.frames) {
      sheetSpec.frames.forEach(frameSpec => {
	sprites.define(frameSpec.name, ...frameSpec.rect);
      });
    }

    if(sheetSpec.animations) {
      sheetSpec.animations.forEach(animSpec => {
	const animation = createAnim(animSpec.frames, animSpec.frameLen);
	sprites.defineAnim(animSpec.name, animation);
      });
    }
    
    return sprites;
  });
}


