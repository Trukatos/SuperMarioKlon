function loadPoleFlag() {

  return loadSpriteSheet("poleFlag")
  .then(createPoleFlagFactory);
}

const STATE_HANGING = Symbol("hanging");

function createPoleFlagFactory(sprite) {

  function routeAnim(poleFlag) {
    return "hanging";
  }

  function drawPoleFlag(context) {
    sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
  }

  return function createPoleFlag() {
    const poleFlag = new Entity("poleFlag");
    poleFlag.size.set(16, 16);

    poleFlag.draw = drawPoleFlag;

    return poleFlag;
  }
}