function PlayerController() {
  Trait.call(this, "playerController");
  this.checkpoint = new Vec2(0, 0);
  this.player = null;
  this.score = 0;
  this.time = 300;

  this.setPlayer = function(entity) {
    this.player = entity;
    this.player.stomper.onStomp = () => {
      this.score += 100;
    };
  }
  this.update = function(entity, deltaTime, level) {
    if(!level.entities.has(this.player)) {
      this.player.killable.revive();
      this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
      level.entities.add(this.player);
    } else {
      this.time -= deltaTime * 2;
    }
  }
}