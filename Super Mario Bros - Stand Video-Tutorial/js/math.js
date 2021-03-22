function Matrix() {
  this.grid = [];

  this.forEach = function(callback) {
    this.grid.forEach((column, x) => {
      column.forEach((value, y) => {
        callback(value, x, y);
      });
    });
  }


  this.get = function(x, y) {
    const col = this.grid[x];
    if(col) {
      return col[y];
    }
    return undefined;
  }
  this.set = function(x, y, value) {
    if(!this.grid[x]) {
      this.grid[x] = [];
    }

    this.grid[x][y] = value;
  }
}

function Vec2(x, y) {
  this.x = x;
  this.y = y;

  this.set = function(x, y) {
    this.x = x;
    this.y = y;
  }
}