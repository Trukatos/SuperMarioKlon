function Matrix() {
  this.grid = [];

  this.forEach = function(callback) {
    this.grid.forEach((column, x) => {
      column.forEach((value, y) => {
        callback(value, x, y);
      });
    });
  }

  this.search = function() {
/*
    this.grid.forEach((column, x) => {
      column.forEach((value, y) => {
        if(this.grid[x + 1][y].name === "chance" && this.grid[x + 2][y].name === "bricks") {
          console.log(x, y);
          return;
        }
      });
    });
*/
    var x = 0;
    var y = 0;
    while(x < this.grid.length - 2) {
      y = 0;
      while(y < this.grid[x].length) {
        if(this.grid[x + 1][y].name === "chance" && this.grid[x + 2][y].name === "bricks") {
          console.log(x, y);
          return;
        }
        y++;
      }
      x++;
    }
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
    if(value === "test") {
        console.log("grid " + x, y + " exists");
    }
    this.grid[x][y] = value;
  }
  this.delete = function(x, y) {
    this.grid[x].splice(y, 1);
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