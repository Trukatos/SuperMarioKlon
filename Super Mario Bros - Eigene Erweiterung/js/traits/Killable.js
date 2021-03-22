const REASON_FALL = Symbol("fall");

function Killable() {
  Trait.call(this, "killable");
  this.dead = false;
  this.deadTime = 0;
  this.removeAfter = 2;
  this.immune = false;
  this.immuneTime = 0;
  this.removeImmuneAfter = 0.5;

  this.kill = function(entity, reason) {
    if(!this.immune) {
      if(entity && entity.name === "mario" && reason === REASON_FALL) {
	entity.growth.state = STATE_SMALL;
        entity.size.set(14, 16);
      } else if(entity && entity.name === "mario" && entity.growth.state !== STATE_SMALL) {
        entity.growth.changeSize(entity);
	this.immune = true;
	entity.canCollide = false;
        return;
      }
      this.queue(() => this.dead = true);
    }
  }

  this.revive = function() {
    this.dead = false;
    this.deadTime = 0;
  }

  this.update = function(entity, deltaTime, level) {
    if(entity.bounds.getTop() > level.height || playerEnvHandler.playerController.time < 0) {
      this.kill(entity, REASON_FALL);
    }
    if(this.dead) {
      this.deadTime += deltaTime;
      if(this.deadTime > this.removeAfter) {
        this.queue(() => {
          if(entity.enemy) {
            level.deadEntities.add(entity);
          }
          level.entities.delete(entity);
	});
      }
    }

    if(this.immune) {
      this.immuneTime += deltaTime;
      if(this.immuneTime > this.removeImmuneAfter) {
        this.immune = false;
        this.immuneTime = 0;
        entity.canCollide = true;
      }
    }

  }
}