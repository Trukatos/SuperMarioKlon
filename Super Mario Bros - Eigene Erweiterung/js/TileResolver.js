function TileResolver(matrix, tileSize = 16) {
  this.matrix = matrix;
  this.tileSize = tileSize;

  this.toIndex = function(pos) {
    return Math.floor(pos / this.tileSize);
  }
 
  this.toIndexRange = function(pos1, pos2) {
    const pMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
    const range = [];
    var pos = pos1;
    do {
      range.push(this.toIndex(pos));
      pos += this.tileSize;
    } while (pos < pMax);
    return range;
  }


  this.getByIndex = function(indexX, indexY) {
    const tile = this.matrix.get(indexX, indexY);
    if(tile) {
      const x1 = indexX * this.tileSize;
      const x2 = x1 + this.tileSize;
      const y1 = indexY * this.tileSize;
      const y2 = y1 + this.tileSize;
      return {
        tile,
	x1,
	x2,
	y1,
	y2,
      };
    }
  }

  this.searchByPosition = function(posX, posY) {
    return this.getByIndex(
	this.toIndex(posX),
	this.toIndex(posY));
  }

  this.searchByRange = function(x1, x2, y1, y2) {
    const matches = [];
    this.toIndexRange(x1, x2).forEach(indexX => {
      this.toIndexRange(y1, y2).forEach(indexY => {
	const match = this.getByIndex(indexX, indexY);
	if (match) {
	  matches.push(match);
        }
      });
    });
    return matches;
  }
}
