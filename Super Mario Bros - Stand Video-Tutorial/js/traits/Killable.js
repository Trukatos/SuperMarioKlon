function Killable() {
  Trait.call(this, "killable");
  this.dead = false;
  this.deadTime = 0;
  this.removeAfter = 2;

  this.kill = function() {
    this.queue(() => this.dead = true);
  }

  this.revive = function() {
    this.dead = false;
    this.deadTime = 0;
  }

  this.update = function(entity, deltaTime, level) {
    if(this.dead) {
      this.deadTime += deltaTime;
      if(this.deadTime > this.removeAfter) {
        this.queue(() => {
          level.entities.delete(entity);
	});
      }
    }
  }
}