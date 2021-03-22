function Physics() {
  Trait.call(this, "physics");
  this.enabled = true;

  this.update = function(entity, deltaTime, level) {

    entity.pos.x += entity.vel.x * deltaTime;
    level.tileCollider.checkX(entity);

    entity.pos.y += entity.vel.y * deltaTime;
    level.tileCollider.checkY(entity);
   
    if(this.enabled) {
      if(entity.name === "mario" && entity.pos.x < cameraHandler.pos.x) {
        entity.pos.x = cameraHandler.pos.x;
      } else if(entity.name === "mario" && entity.bounds.getRight() > cameraHandler.max) {
        entity.bounds.setRight(cameraHandler.max);
      }
    
      entity.vel.y += level.gravity * deltaTime;
    }
  }
}