var print = true;
function TileCollider(tileMatrix) {

  this.tiles = new TileResolver(tileMatrix);

  this.checkX = function(entity) {
    var x;
/*
    if(print) {
      console.log("entity pos x", entity.pos.x, "entity getLeft", entity.bounds.getLeft());
      var res = entity.pos.x + entity.size.x;
      console.log("entity pos x + size", res, "entity getRight", entity.bounds.getRight());
      console.log("entity pos y", entity.pos.y, "entity getTop", entity.bounds.getTop());
      console.log("entity pos y + size", entity.pos.y + entity.size.y, "entity getBottom", entity.bounds.getBottom());
      print = false;
    }
*/
    
    if(entity.vel.x > 0) {
      x = entity.pos.x + entity.size.x;
    } else if (entity.vel.x < 0) {
      x = entity.pos.x;
    } else {
      return;
    }
    const matches = this.tiles.searchByRange(
	x, x,
	entity.bounds.getTop(), entity.bounds.getBottom());
 
    matches.forEach(match => {
      if(match.tile.type !== "ground") {
        return;
      }

      if(entity.vel.x > 0) {
        if(entity.bounds.getRight() > match.x1) { 
	  entity.obstruct(Sides.RIGHT, match);
        }
      } else if(entity.vel.x < 0) {
        if(entity.bounds.getLeft() < match.x2) {
	  entity.obstruct(Sides.LEFT, match);
        }
      }
    });
  }

  this.checkY = function(entity) {
    var y;
    if(entity.vel.y > 0) {
      y = entity.bounds.getBottom();
    } else if (entity.vel.y < 0) {
      y = entity.bounds.getTop();
    } else {
      return;
    }
    const matches = this.tiles.searchByRange(
	entity.bounds.getLeft(), entity.bounds.getRight(),
	y, y);
 
    matches.forEach(match => {
      if(match.tile.type !== "ground") {
        return;
      }

      if(entity.vel.y > 0) {
        if(y > match.y1) {
	  entity.obstruct(Sides.BOTTOM, match);
        }
      } else if(entity.vel.y < 0) {
        if(y < match.y2) {
	  entity.obstruct(Sides.TOP, match);
        }
      }
    });
  }

  
  this.test = function(entity) {
    this.checkY(entity);
  }

}