const STATE_TALL = Symbol("tall");
const STATE_SMALL = Symbol("small");
const STATE_GROWING = Symbol("growing");
const STATE_KILL = Symbol("kill");
const STATE_FIRE = Symbol("fire");

function Growth() {
  Trait.call(this, "growth");

  this.state = STATE_SMALL;
  this.growTime = 0.5;
  this.elapsedTime = 0;

  this.changeSize = function(entity) {
    if(this.isBig()) {
      this.state = STATE_SMALL
      entity.size.set(14, 16);
      entity.pos.y += 16;
    } else if(this.state === STATE_SMALL) {
      this.state = STATE_TALL;
      entity.size.set(14, 32);
      entity.pos.y -= 16;
    }
  }

  this.isBig = function() {
    return this.state === STATE_TALL || this.state === STATE_FIRE;
  }
  this.update = function(entity, deltaTime) {
    if(this.state === STATE_GROWING) {
      this.elapsedTime += deltaTime;
      if(this.elapsedTime >= this.growTime) {
        this.state = STATE_SMALL;
	this.changeSize(entity);
        this.elapsedTime = 0;
      }
    }
  }
}