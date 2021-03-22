function Level() {
  this.gravity = 1500;
  this.totalTime =0;

  this.comp = new Compositor();
  this.entities = new Set();

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
}
