function Warper() {
  Trait.call(this, "warper");

  this.obstruct = function (entity, side, match) {
    if(match.tile.warp && match.x1 === match.tile.warp.startX && match.y1 === match.tile.warp.startY && side.toString() === Symbol(match.tile.warp.side).toString()) {
      if(side !== Sides.BOTTOM || (entity.ducking && Math.abs(entity.pos.x - (match.tile.warp.startX + entity.size.x / 2)) <= entity.size.x / 2)) {
        if(match.tile.warp.dir === "in") {
          cameraHandler.min = match.tile.warp.leftLimit;
          cameraHandler.max = match.tile.warp.rightLimit;
        } else {
          camera.reset();
        }
        entity.bounds.setLeft(match.tile.warp.endX);
        entity.bounds.setBottom(match.tile.warp.endY);
        cameraHandler.setX(entity.pos.x);
        cameraHandler.prevX = cameraHandler.pos.x;
      //entity.physics.enabled = true;
      }
    }
  }
}