function Compositor() {
  this.layers = [];
  this.width = 256;
  this.height = 244;

  this.draw = function(context, camera) {
    if(!playerEnvHandler.playerController.player.killable.dead) {
      this.layers.forEach(layer => {
        layer(context, camera);
      });
    } else {
      context.fillStyle = "black";
      context.fillRect(0, 0, this.width, this.height);

      if(playerEnvHandler.playerController.lives > 0) {
        fontHandler.print("World 1-1", context, this.width/2 - 20, this.height/2 - fontHandler.size * 2);
        fontHandler.print("  x " + playerEnvHandler.playerController.lives, context, this.width/2 -5, this.height/2 + 5);
        fontHandler.printMario(context, this.width/2 - 10, this.height/2);
      } else {
        fontHandler.print("GAME OVER", context, this.width/2 -30, this.height/2 - 30);
      }
    }
  }
}