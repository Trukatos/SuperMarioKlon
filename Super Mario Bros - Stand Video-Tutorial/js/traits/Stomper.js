function Stomper() {
  Trait.call(this, "stomper");  
  this.bounceSpeed = 400;

  this.onStomp = function() {
    
  }

  this.bounce = function(us, them) {
    us.bounds.setBottom(them.bounds.getTop());
    us.vel.y = -this.bounceSpeed;
  }

  this.collides = function(us, them) {
    if (!them.killable || them.killable.dead) {
      return;
    }

    if (us.vel.y > them.vel.y) {
      this.bounce(us, them);
      this.onStomp(us, them);
    }
  }
}