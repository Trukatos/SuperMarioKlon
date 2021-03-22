function Camera(min, max) {
  this.pos = new Vec2(0, 0);
  this.prevX = 0;
  this.size = new Vec2(256, 224);
  this.defaultMin = min;
  this.defaultMax = max;
  this.min = min;
  this.max = max;

  this.setX = function(value) {
    this.pos.x = Math.min(Math.max(this.min, value - 100), this.max - this.size.x);
  }

  this.reset = function(value) {
    this.min = this.defaultMin;
    this.max = this.defaultMax;
  }
}