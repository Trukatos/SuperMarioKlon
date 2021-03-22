function BoundingBox(pos, size, offset) {
  this.pos = pos;
  this.size = size;
  this.offset = offset;
  

  this.overlaps = function(box) {
    return this.getBottom() > box.getTop() 
        && this.getTop() < box.getBottom() 
        && this.getLeft() < box.getRight() 
        && this.getRight() > box.getLeft();
  }

  this.getBottom = function() {
    return this.pos.y + this.size.y + this.offset.y;
  }

  this.setBottom = function(y) {
    this.pos.y = y - (this.size.y + this.offset.y);
  }

  this.getTop = function() {
    return this.pos.y + this.offset.y;
  }

  this.setTop = function(y) {
    this.pos.y = y - this.offset.y;
  }

  this.getLeft = function() {
    return this.pos.x + this.offset.x;
  }

  this.setLeft = function(x) {
    this.pos.x = x - this.offset.x;
  }

  this.getRight = function() {
    return this.pos.x + this.size.x + this.offset.x;
  }

  this.setRight = function(x) {
    this.pos.x = x - (this.size.x + this.offset.x);
  }
}