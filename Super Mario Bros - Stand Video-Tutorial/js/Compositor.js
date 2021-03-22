function Compositor() {
  this.layers = [];

  this.draw = function(context, camera) {
    this.layers.forEach(layer => {
      layer(context, camera);
    });
  }
}