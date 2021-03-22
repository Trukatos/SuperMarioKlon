counter = 10;

const Sides = {
  TOP: Symbol("top"),
  BOTTOM: Symbol("bottom"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right")
};

function Trait(name) {
  this.NAME = name;
  this.tasks = [];

  this.finalize = function() {
    this.tasks.forEach(task => task());
    this.tasks.length = 0;
  }

  this.queue = function(task) {
    this.tasks.push(task);
  }

  this.collides = function(us, them) {

  }



  this.obstruct = function() {

  }

  this.update = function() {
    
  }
}

function Entity(name) {
  this.canCollide = true;
  this.pos = new Vec2(0, 0);
  this.startPos = new Vec2(0, 0);
  this.vel = new Vec2(0, 0);
  this.size = new Vec2(0, 0);
  this.offset = new Vec2(0, 0);
  this.bounds = new BoundingBox(this.pos, this.size, this.offset);
  this.lifetime = 0;

  this.name = name;
  

  this.traits = [];

  this.addTrait = function(trait) {
    this.traits.push(trait);
    this[trait.NAME] = trait;
  }
 

  this.collides = function(candidate) {
    this.traits.forEach(trait => {  
      trait.collides(this, candidate);
    });
  }

  this.obstruct = function(side, match) {
    this.traits.forEach(trait => {
      trait.obstruct(this, side, match);
    });
  }

  this.draw = function() {

  }

  this.finalize = function() {
    this.traits.forEach(trait => {
      trait.finalize();
    });
  }

  this.update = function(deltaTime, level) {
    this.traits.forEach(trait => {
      trait.update(this, deltaTime, level);
    });
    this.lifetime += deltaTime;
  }

  this.resetPosition = function() {
    this.pos.x = this.startPos.x;
    this.pos.y = this.startPos.y;
  }
}