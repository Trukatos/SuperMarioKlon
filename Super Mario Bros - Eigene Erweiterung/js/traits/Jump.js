function spawnItem(name, size, x, y) {
    
}

function Jump() {
  Trait.call(this, "jump");

  this.ready = 0;
  this.duration = 0.3;
  this.velocity = 200;
  this.engageTime = 0;
  this.requestTime = 0;
  this.gracePeriod = 0.1;
  this.speedBoost = 0.3;
  this.getFalling = function() {
    return this.ready < 0;
  }

  this.start = function() {
    this.requestTime = this.gracePeriod;
  }

  this.cancel = function() {
    this.engageTime = 0;
    this.requestTime = 0;
  }

  this.obstruct = function (entity, side, match) {
    if(side === Sides.BOTTOM && !entity.solid.hitBottomFlag) {
      this.ready = 1;
    } else if (side === Sides.TOP) {
      if(match.tile.name === "chance") {
        const tile = gridHandler.get(match.x1 /16, match.y1 /16);
        if(tile.item) {
          this.hitChance(tile.item, entity.growth.state, 16, match.x1, match.y1);
          //hitChance is defined in PlayerController to access its properties like the coin counter
        }
        if(tile.name !== "chance-used") {
          gridHandler.usedTiles.push({x: match.x1 / 16, y: match.y1 / 16, data: tile});
        }
        gridHandler.set(match.x1 /16, match.y1 /16, {name: "chance-used", type: "ground"});
      } else if(match.tile.name === "bricks" && entity.growth.state !== STATE_SMALL) {
        const tile = gridHandler.get(match.x1 /16, match.y1 /16);
        if(tile.name !== "chance-used") {
          gridHandler.usedTiles.push({x: match.x1 / 16, y: match.y1 / 16, data: tile});
        }
        gridHandler.delete(match.x1 /16, match.y1 /16); 
        //this could prove erroneus, because delete uses array.splice and therefore the grid could be misplaced
        //gridHandler.set(match.x1 /16, match.y1 /16, "empty"); 
        levelHandler.tileCollider.tiles.matrix.usedTiles.push({x: match.x1 / 16, y: match.y1 / 16, data: levelHandler.tileCollider.tiles.matrix.get(match.x1 / 16, match.y1 / 16)});
        levelHandler.tileCollider.tiles.matrix.set(match.x1 /16, match.y1 /16, "empty");
  
        //levelHandler.tileCollider.tiles.matrix.search();

        //console.log(levelHandler.tileCollider.tiles.matrix.grid[match.x1 /16][match.y1 /16]);

        var debris = entityFactoryHandler["debris"](match.x1, match.y1, "top-left");
        levelHandler.entities.add(debris);
        debris = entityFactoryHandler["debris"](match.x1, match.y1, "top-right");
        levelHandler.entities.add(debris);
        debris = entityFactoryHandler["debris"](match.x1, match.y1, "down-left");
        levelHandler.entities.add(debris);
        debris = entityFactoryHandler["debris"](match.x1, match.y1, "down-right");
        levelHandler.entities.add(debris);
      }    
      this.cancel();
    }
  }

  this.update = function(entity, deltaTime) {
    if(this.requestTime > 0) {
      if(this.ready > 0) {
        this.engageTime = this.duration;
	this.requestTime = 0;
      }

      this.requestTime -= deltaTime;
    }
    if(this.engageTime > 0) {
      entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
      this.engageTime -= deltaTime;
    }

    this.ready--;
  }
}