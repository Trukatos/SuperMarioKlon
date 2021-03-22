const SLOW_DRAG = 1/1000;
const FAST_DRAG = 1/5000;

function loadMario() {

  return loadSpriteSheet("mario")
  .then(createMarioFactory);
}

function createMarioFactory(sprite) {

  const runAnim = sprite.animations.get("run");

  function routeFrame(mario) {
    if(mario.jump.getFalling()) {
      return "jump";
    }
    if(mario.go.distance > 0) {
      if(mario.vel.x > 0 && mario.go.dir < 0 || mario.vel.x < 0 && mario.go.dir > 0) {
	return "brake";
      }
      return runAnim(mario.go.distance);
    }
    return "idle";
  }

 
  
  

  return function createMario() {
    const mario = new Entity("mario");
    mario.size.set(14, 16);

    mario.addTrait(new Go());
    mario.addTrait(new Jump());    
    mario.addTrait(new Killable());
    mario.addTrait(new Stomper());
    mario.addTrait(new Solid());
    mario.addTrait(new Physics());

    mario.killable.removeAfter = 0;

    mario.turbo =  function setTurboState(turboOn) {
      mario.go.dragFactor = turboOn ? FAST_DRAG : SLOW_DRAG;
    }
    mario.draw = function drawMario(context) {
      sprite.draw(routeFrame(this), context, 0, 0, this.go.heading < 0);
    }

    mario.turbo(false);

    return mario;
  }
}