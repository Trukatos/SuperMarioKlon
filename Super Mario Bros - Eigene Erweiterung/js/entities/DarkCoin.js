function loadDarkCoin() {

  return loadSpriteSheet("darkCoin")
  .then(createDarkCoinFactory);
}

function createDarkCoinFactory(sprite) {
  const shineAnim = sprite.animations.get("shine");
  function routeAnim(darkCoin) {
    return shineAnim(darkCoin.lifetime);
  }

  function drawDarkCoin(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createDarkCoin(x = 0, y = 0) {
    const darkCoin = new Entity("darkCoin");
    darkCoin.size.set(16, 16);
    darkCoin.pos.set(x, y);
    darkCoin.startPos.set(x, y);
    darkCoin.addTrait(new Killable());
    darkCoin.killable.removeAfter = 0;
    darkCoin.draw = drawDarkCoin;
    darkCoin.unused = true;

    return darkCoin;
  }

}