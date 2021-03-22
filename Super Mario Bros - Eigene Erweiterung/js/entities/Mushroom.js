function loadMushroom() {

  return loadSpriteSheet("mushroom")
  .then(createMushroomFactory);
}

const STATE_BEING = Symbol("being");

function MushroomBehavior() {
  Trait.call(this, "behavior");

  this.collides = function(us, them) {
    if(us.killable.dead) {
      return;
    }
    if(them.growth) {
      us.killable.kill();
      us.killable.removeAfter = 0;
      if(them.growth.state !== STATE_TALL) {
        them.growth.state = STATE_GROWING;
      }
    }
  }
}

function createMushroomFactory(sprite) {

  function routeAnim(mushroom) {
    return "being";
  }

  function drawMushroom(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createMushroom(x = 0, y = 0) {
    const mushroom = new Entity("mushroom");
    mushroom.size.set(16, 16);
    mushroom.pos.set(x, y + 16);
    mushroom.startPos.set(x, y + 16);

    mushroom.canCollide = false;

    mushroom.draw = drawMushroom;
    
    mushroom.addTrait(new Physics());
    mushroom.addTrait(new PopOut());
    mushroom.addTrait(new Killable());
    mushroom.addTrait(new MushroomBehavior());

    return mushroom;
  }

}