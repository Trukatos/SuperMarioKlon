function Level(w, h) {
  this.gravity = 1500;
  this.totalTime = 0;
  this.width = w;
  this.height = h;

  this.comp = new Compositor(this.width, this.height);
  this.entities = new Set();
  this.deadEntities = new Set();

  this.entityCollider = new EntityCollider(this.entities);
  this.tileCollider = null;

  this.setCollisionGrid = function(matrix) {
    this.tileCollider = new TileCollider(matrix);
  }

  this.update = function(deltaTime) {
    this.entities.forEach(entity => {
      entity.update(deltaTime, this);

      
    });
    this.entities.forEach(entity => {
      this.entityCollider.check(entity);
    });

    this.entities.forEach(entity => {
      entity.finalize();
    });


    this.totalTime += deltaTime;
  }

  this.reviveTheDead = function() {
    this.deadEntities.forEach(entity => {
      entity.killable.revive();
      entity.resetPosition();
      if(entity.pendulumMove) {
        entity.pendulumMove.speed = entity.pendulumMove.startSpeed;
      }
      this.entities.add(entity);
    });
    this.deadEntities.clear();
  }

  this.restart = function() {
    console.log(gridHandler.usedTiles); 
    gridHandler.usedTiles.forEach(tile => {
      gridHandler.set(tile.x, tile.y, tile.data);
    });
    gridHandler.usedTiles.length = 0;
    var usedCollisionTiles = levelHandler.tileCollider.tiles.matrix.usedTiles;
    usedCollisionTiles.forEach(tile => {
      levelHandler.tileCollider.tiles.matrix.set(tile.x, tile.y, tile.data);
    });
    usedCollisionTiles.length = 0;

/*
    loadLevelHandler(1, 2).then(level => {
      console.log(level);
    });
*/
  }
}
