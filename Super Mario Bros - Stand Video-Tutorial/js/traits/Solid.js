function Solid() {
  Trait.call(this, "solid");
  this.obstructs = true;

  this.obstruct = function (entity, side, match) {
    if(!this.obstructs) {
      return;
    }

    if(side === Sides.BOTTOM) {
      entity.bounds.setBottom(match.y1);
      entity.vel.y = 0;
    } else if (side === Sides.TOP) {
      entity.bounds.setTop(match.y2);
      entity.vel.y = 0;
    } else if (side === Sides.LEFT) {
      entity.bounds.setLeft(match.x2);
      entity.vel.x = 0;
    } else if (side === Sides.RIGHT) {
      entity.bounds.setRight(match.x1);
      entity.vel.x = 0;
    }
  }
}