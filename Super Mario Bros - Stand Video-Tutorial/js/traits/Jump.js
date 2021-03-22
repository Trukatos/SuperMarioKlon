function Jump() {
  Trait.call(this, "jump");

  this.ready = 0;
  this.duration = 0.3;
  this.velocity = 200;
  this.engageTime = 0;
  this.requestTime = 0;
  this.gracePeriod = 0.1;
  this.speedBoost = 0.3;
  this.getFalling = function() {
    return this.ready < 0;
  }

  this.start = function() {
    this.requestTime = this.gracePeriod;
  }

  this.cancel = function() {
    this.engageTime = 0;
    this.requestTime = 0;
  }

  this.obstruct = function (entity, side) {
    if(side === Sides.BOTTOM) {
      this.ready = 1;
    } else if (side === Sides.TOP) {
      this.cancel();
    }
  }

  this.update = function(entity, deltaTime) {
    if(this.requestTime > 0) {
      if(this.ready > 0) {
        this.engageTime = this.duration;
	this.requestTime = 0;
      }

      this.requestTime -= deltaTime;
    }
    if(this.engageTime > 0) {
      entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
      this.engageTime -= deltaTime;
    }

    this.ready--;
  }
}