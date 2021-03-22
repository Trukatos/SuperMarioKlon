function Solid() {
  Trait.call(this, "solid");
  this.obstructs = true;
  this.reachedFlag = false;
  this.hitBottomFlag = false;
  this.hangTime = 0;

  this.obstruct = function (entity, side, match) {
    if(!this.obstructs) {
      return;
    }
    if((match.tile.name === "pole-rod" ||
       match.tile.name === "pole-top") &&
       !this.hitBottomFlag) {
      if(!this.reachedFlag && entity.bounds.getLeft() <= match.x1 + 6 && entity.bounds.getRight() >= match.x2 - 6) { // 8 = half tilesize
        entity.jump.cancel();
        entity.physics.enabled = false;
        entity.vel.y = 100;
        entity.vel.x = 0;
        entity.bounds.setLeft(match.x1);
        entity.go.enabled = false;
        playerEnvHandler.playerController.countTime = false;   
        this.reachedFlag = true;   
      }
    } else if(match.tile.name === "chocolate" && this.reachedFlag && !this.hitBottomFlag) {
      entity.go.heading = -1;
      entity.vel.y = 0;
      this.hitBottomFlag = true;
    } else if(match.tile.name === "castle-door-bottom") {
      if(Math.abs(entity.bounds.getRight() - match.x2) <= 2) {
        entity.vel.x = 0;
        entity.go.distance = 0;
      }
    } else if(!this.reachedFlag) {
      if(this.hitBottomFlag) {
        if(entity.vel.y < 0)  {
          return;
        }
      }
      if(side === Sides.BOTTOM) {
        entity.bounds.setBottom(match.y1);
        entity.vel.y = 0;
        if(this.hitBottomFlag && match.tile.name !== "pole-rod") {
          entity.jump.ready = 0;
        }
      } else if (side === Sides.TOP) {
        entity.bounds.setTop(match.y2);
        entity.vel.y = 0;
      } else if (side === Sides.LEFT) {
        entity.bounds.setLeft(match.x2);
        entity.vel.x = 0;
      } else if (side === Sides.RIGHT) {
        entity.bounds.setRight(match.x1);
        entity.vel.x = 0;
      }
    }
  }

  this.update = function(entity, deltaTime) {
    if(this.hitBottomFlag && this.reachedFlag) {
      this.hangTime += deltaTime;
      if(this.hangTime >= 0.1) {
        entity.go.heading = 1;
        entity.physics.enabled = true;
        entity.vel.y = -200;
        entity.vel.x = 50;
        entity.go.distance = 0;
        entity.jump.ready = -1;
        this.reachedFlag = false;
      }
    }
  }
}