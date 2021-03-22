function loadDebris() {

  return loadSpriteSheet("debris")
  .then(createDebrisFactory);
}

function DebrisBehavior() {
  Trait.call(this, "behavior");
  this.vel = 30;

  this.update = function(entity, deltaTime, level) {
    switch(entity.part) {
      case "top-left":
        entity.vel.x = -this.vel;
        entity.vel.y = -this.vel;
        break;
      case "top-right":
        entity.vel.x = this.vel;
        entity.vel.y = -this.vel;
        break;
      case "down-left":
        entity.vel.x = -this.vel;
        entity.vel.y = this.vel;
        break;
      case "down-right":
        entity.vel.x = this.vel;
        entity.vel.y = this.vel;
        break;
    }
    entity.pos.x += entity.vel.x * deltaTime;
    entity.pos.y += entity.vel.y * deltaTime;
  }
}


function createDebrisFactory(sprite) {

  function routeAnim(debris) {
    return debris.part;
  }

  function drawDebris(context) {
      sprite.draw(routeAnim(this), context, 0, 0, false);
  }

  return function createDebris(x = 0, y = 0, part) {
    const debris = new Entity("debris");
    const offsetL = 2;
    const offsetR = 6;
    switch(part) {
      case "top-left":
        debris.pos.set(x + offsetL, y + offsetL);
        break;
      case "top-right":
        debris.pos.set(x + offsetR, y + offsetL);
        break;
      case "down-left":
        debris.pos.set(x + offsetL, y + offsetR);
        break;
      case "down-right":
        debris.pos.set(x + offsetR, y + offsetR);
        break;
    }
    debris.startPos.set(debris.pos.x, debris.pos.y);
    
    debris.size.set(8, 8);
    debris.part = part;

    debris.draw = drawDebris;
    
    debris.addTrait(new Killable());
    debris.killable.removeAfter = 0.2;
    debris.killable.kill();
    debris.addTrait(new DebrisBehavior());

    return debris;
  }

}