function PopOut() {
  Trait.call(this, "popOut");
  this.enabled = true;
  this.speed = -16;
  this.growLen = 16.1;

  this.update = function(entity, deltaTime) {
    if(this.enabled) {
      entity.vel.y = this.speed;
      this.growLen += this.speed * deltaTime;
      if(this.growLen <= 0) {
	this.enabled = false;
        entity.addTrait(new Solid());
        if(entity.name === "mushroom") {
          entity.addTrait(new PendulumMove());
          entity.pendulumMove.speed = -entity.pendulumMove.speed;
        }
      }
    }
  }
}