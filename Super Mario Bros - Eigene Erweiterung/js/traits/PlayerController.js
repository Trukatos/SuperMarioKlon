function PlayerController() {
  Trait.call(this, "playerController");
  this.checkpoint = new Vec2(0, 0);
  this.player = null;
  this.score = 0;
  this.time = 300;
  this.countTime = true;
  this.coins = 0;
  this.totalLives = 3;
  this.lives = this.totalLives;
  this.accumulatedTime = 0;
  this.reviveAfter = 3;
  this.firstSpawn = true;

  this.setPlayer = function(entity) {
    this.player = entity;
    this.player.stomper.onStomp = () => {
      this.score += 100;
    };
    this.player.jump.hitChance = (name, state, size, x, y) => {
      if(name === "mushroom" && (state === STATE_TALL || state === STATE_FIRE)) {
        name = "firebloom";
      }
      const item = entityFactoryHandler[name](x, y - size);
      levelHandler.entities.add(item);
      if(name === "coin") {
        this.coins++;
      }
    };
  }
  this.update = function(entity, deltaTime, level) {
    if(!level.entities.has(this.player)) {
      if(this.accumulatedTime >= this.reviveAfter || this.firstSpawn) {
        this.resetPlayer(level);
      } else {
        this.accumulatedTime += deltaTime;
      }
    } else if (this.countTime) {
      this.time -= deltaTime * 2;
    }
  }

  this.resetPlayer = function(level) {
    this.firstSpawn = false;
    this.player.killable.revive();
    this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
    cameraHandler.reset();
    cameraHandler.setX(this.player.pos.x);
    cameraHandler.prevX = cameraHandler.pos.x;
    this.time = 300;
    level.restart();
    level.reviveTheDead();
    level.entities.add(this.player);
    //level.entities.add(playerEnvHandler);
    this.accumulatedTime = 0;
    if(this.lives === 0){
      this.lives = this.totalLives;
    } else {
      this.lives--;
    }
  }
}