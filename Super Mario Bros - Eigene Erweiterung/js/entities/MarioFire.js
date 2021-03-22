function loadMarioFire() {

  return loadSpriteSheet("marioFire")
  .then(createMarioFireFactory);
}

function MarioFireBehavior() {
  Trait.call(this, "behavior");
  this.speedX = 150;
  this.speedY = 200;
  this.dirX = 1;
  this.dirY = 1;
  this.engageTime = 0;
  this.duration = 0.075;
  this.bounceCounter = 0;
  this.bounceLimit = 5;
  this.count = true;

  this.collides = function(us, them) {
    if((them.name === "goomba" || them.name === "koopa") && !them.killable.dead) {
      them.killable.kill();
      them.pendulumMove.speed = 0;
      us.killable.kill();
      this.speedX = 0;
      this.speedY = 0;
      us.physics.enabled = false;
    }
  }

  this.update = function(entity, deltaTime, level) {
    entity.vel.x = this.speedX * this.dirX;

    if(this.ready > 0) {
      this.engageTime = this.duration;
    }
    if(this.engageTime > 0) {
      entity.vel.y = -this.speedY;
      this.count = true;
      this.engageTime -= deltaTime;
    }

    this.ready--;

    if(entity.pos.y > level.height || this.bounceCounter >= this.bounceLimit) {
      entity.killable.kill();
      this.speedX = 0;
      this.speedY = 0;
      entity.physics.enabled = false;
    }
  }

  this.obstruct = function(entity, side, match) {
    switch(side) {
      case Sides.BOTTOM:
        entity.bounds.setBottom(match.y1);
        this.dirY = -1;
        this.ready = 1;
        if(this.count) {
          this.bounceCounter++;
          this.count = false;
        }
        break;
      case Sides.TOP:
        entity.bounds.setTop(match.y2);
        this.dirY = 1;
        break;
      case Sides.RIGHT:
        entity.bounds.setRight(match.x1);
        this.dirX = -1;
        break;
      case Sides.LEFT:
        entity.bounds.setLeft(match.x2);
        this.dirX = 1;
        break;
    }
  }
}

function createMarioFireFactory(sprite) {
  const rotateAnim = sprite.animations.get("rotate");

  function routeAnim(marioFire) {
    if(marioFire.killable.dead) {
      return "splash";
    }
    return rotateAnim(marioFire.lifetime);
  }

  function drawMarioFire(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createMarioFire(x = 0, y = 0) {
    const marioFire = new Entity("marioFire");
    marioFire.size.set(8, 8);
    marioFire.pos.set(x, y);
    marioFire.startPos.set(x, y);

    marioFire.canCollide = false;

    marioFire.draw = drawMarioFire;
    
    marioFire.addTrait(new MarioFireBehavior());
    marioFire.addTrait(new Physics());
    marioFire.addTrait(new Killable());
    marioFire.killable.removeAfter = 0.3;

    return marioFire;
  }

}