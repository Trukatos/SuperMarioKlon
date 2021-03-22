function TouchPole() {
  Trait.call(this, "touchPole");

  this.obstruct = function (entity, side, match) {
    if(match.tile.name === "pole-rod" ||
       match.tile.name === "pole-top") {
    }
  }
}