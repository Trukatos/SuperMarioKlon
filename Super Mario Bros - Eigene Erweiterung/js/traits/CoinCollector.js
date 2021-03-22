function CoinCollector() {
  Trait.call(this, "coinCollector");  


  this.collides = function(us, them) {
    if(them.name === "darkCoin" && them.unused) {
      them.unused = false;
      playerEnvHandler.playerController.coins++;
      them.killable.kill();
    }
  }
}