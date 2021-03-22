function loadCoin() {

  return loadSpriteSheet("coin")
  .then(createCoinFactory);
}

const STATE_SHINING = Symbol("shining");

function createCoinFactory(sprite) {
  function routeAnim(coin) {
    return "shining";
  }

  function drawCoin(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createCoin(x = 0, y = 0) {
    const coin = new Entity("coin");
    coin.size.set(16, 16);
    coin.pos.set(x, y);
    coin.startPos.set(x, y);
    coin.addTrait(new Killable());
    coin.killable.removeAfter = 0.5;
    //coin.killable.kill();
    coin.canCollide = false;

    coin.draw = drawCoin;

    return coin;
  }

}