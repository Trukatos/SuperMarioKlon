const SLOW_DRAG = 1/1000;
const FAST_DRAG = 1/5000;

function loadMario() {

  return loadSpriteSheet("mario")
  .then(createMarioFactory);
}

function createMarioFactory(sprite) {


    const runSmallAnim = sprite.animations.get("run-small");

    function routeFrame(mario) {
      mario.setFrames(sprite);
      if(mario.solid.reachedFlag && mario.vel.x === 0) {
        return mario.frames.hang;
      }
      if(mario.jump.getFalling()) {
        return mario.frames.jump;
      }
      if(mario.go.distance > 0) {
        if(mario.vel.x > 0 && mario.go.dir < 0 || mario.vel.x < 0 && mario.go.dir > 0) {
	  return mario.frames.brake;
        }
        return mario.frames.runAnim(mario.go.distance);
      }
      return mario.frames.idle;
    }
  
  return function createMario() {
    const mario = new Entity("mario");
    mario.size.set(14, 16);
    mario.lastFired = 0;
    mario.awaitFire = 0.5;

    mario.addTrait(new Go());
    mario.addTrait(new Jump());
    mario.addTrait(new Killable());
    mario.addTrait(new Stomper());
    mario.addTrait(new Solid());
    mario.addTrait(new Physics());
    mario.addTrait(new Growth());
    mario.addTrait(new TouchPole());
    mario.addTrait(new CoinCollector());
    mario.addTrait(new Warper());

    mario.growth.state = STATE_FIRE;
    mario.size.set(14, 32);
    mario.pos.y -= 16; // Only for Development, delete this after finishing Mario's Fireballs

    mario.killable.removeAfter = 0;

    mario.frames = new Object();
    mario.setFrames = function(sprite) {
      if(this.growth.state === STATE_SMALL) {
        this.frames.jump = "jump-small";
        this.frames.idle = "idle-small";
        this.frames.brake = "brake-small";
        this.frames.hang = "hang-small";
        this.frames.runAnim = sprite.animations.get("run-small");
      } else if (this.growth.state === STATE_TALL) {
        this.frames.jump = "jump-tall";
        this.frames.idle = "idle-tall";
        this.frames.brake = "brake-tall";
        this.frames.hang = "hang-tall";
        this.frames.runAnim = sprite.animations.get("run-tall");
      } else if (this.growth.state === STATE_FIRE){
        this.frames.jump = "jump-fire";
        this.frames.idle = "idle-fire";
        this.frames.brake = "brake-fire";
        this.frames.hang = "hang-fire";
        this.frames.runAnim = sprite.animations.get("run-fire");
      }
    }

    mario.turbo =  function setTurboState(turboOn) {
      mario.go.dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
    }

    mario.fire = function fire() {
      if(mario.growth.state === STATE_FIRE && mario.lifetime - mario.lastFired > mario.awaitFire) {
        mario.lastFired = mario.lifetime;
        var x = mario.go.heading >= 0 ? mario.bounds.getRight() : mario.bounds.getLeft() ;
        const item = entityFactoryHandler["marioFire"](x, mario.bounds.getTop() + mario.size.y / 2);
        if(mario.go.heading < 0) {
          item.behavior.dirX = -1;
        }
        levelHandler.entities.add(item);
      }
    }

    mario.draw = function drawMario(context) {
      sprite.draw(routeFrame(this), context, 0, 0, this.go.heading < 0);
    }

    //mario.obstruct = obstruct;

    mario.turbo(false);

    return mario;
  }
}