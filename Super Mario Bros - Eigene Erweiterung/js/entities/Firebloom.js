function loadFirebloom() {

  return loadSpriteSheet("firebloom")
  .then(createFirebloomFactory);
}

function FirebloomBehavior() {
  Trait.call(this, "behavior");

  this.collides = function(us, them) {
    if(us.killable.dead) {
      return;
    }
    if(them.growth) {
      them.growth.state = STATE_FIRE;
      us.killable.kill();
      us.killable.removeAfter = 0;
    }
  }
}

function createFirebloomFactory(sprite) {
  const shineAnim = sprite.animations.get("shine");

  function routeAnim(firebloom) {
    return shineAnim(firebloom.lifetime)
  }

  function drawFireBloom(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createFirebloom(x = 0, y = 0) {
    const firebloom = new Entity("firebloom");
    firebloom.size.set(16, 16);
    firebloom.pos.set(x, y + 16);
    firebloom.startPos.set(x, y + 16);

    firebloom.canCollide = false;

    firebloom.draw = drawFireBloom;
    
    firebloom.addTrait(new Physics());
    firebloom.addTrait(new PopOut());
    firebloom.addTrait(new Killable());
    firebloom.addTrait(new FirebloomBehavior());

    return firebloom;
  }

}