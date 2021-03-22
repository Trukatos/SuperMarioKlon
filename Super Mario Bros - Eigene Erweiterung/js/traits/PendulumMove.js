function PendulumMove() {
  Trait.call(this, "pendulumMove");
  this.enabled = true;
  this.startSpeed = -30;
  this.speed = this.startSpeed;

  this.obstruct = function(entity, side) {
    if (side === Sides.LEFT || side === Sides.RIGHT) {
      this.speed = -this.speed;
    }
  }

  this.update = function(entity, deltaTime) {
    if(this.enabled) {
      entity.vel.x = this.speed;
    }
  }
}