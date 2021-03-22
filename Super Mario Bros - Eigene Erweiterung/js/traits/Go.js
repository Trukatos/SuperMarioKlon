function Go() {
  Trait.call(this, "go");

  this.dir = 0;
  this.acceleration = 400;
  this.deceleration = 300;
  this.dragFactor = SLOW_DRAG;
  this.enabled = true;


  this.distance = 0;
  this.heading = 1;

  this.update = function(entity, deltaTime) {
    
    const absX = Math.abs(entity.vel.x);
    if(this.enabled) {
      if(this.dir !== 0) {
        entity.vel.x += this.acceleration * deltaTime * this.dir;

        if(entity.jump) {
          if(entity.jump.getFalling() === false) {
	    this.heading = this.dir;
          }
        } else {
  	  this.heading = this.dir;
        }
	
      } else if (entity.vel.x !== 0) {
        const decel = Math.min(absX, this.deceleration * deltaTime);
        entity.vel.x += entity.vel.x > 0 ? -decel : decel;
      } else {
        this.distance = 0;
      }

      const drag = this.dragFactor * entity.vel.x * absX;
      entity.vel.x -= drag;
    }
    this.distance += absX * deltaTime;  //needs to always be calculated
					// for the run-anim to work
					// when mario is on "pole-animation"
  }
}