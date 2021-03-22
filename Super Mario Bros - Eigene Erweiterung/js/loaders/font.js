const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function Font(sprites, mario, size) {
  this.sprites = sprites;
  this.size = size;
  this.mario = mario;

  this.print = function(text, context, x, y) {
    for(var i = 0; i < text.length; i++) {
      this.sprites.draw(text[i], context, x + i * this.size, y);
    }
  }

  this.printMario = function(context, x, y) {
    this.mario.draw("mario", context, x, y);
  }
}
/*
function loadFont() {
  return loadImage("img/font.png")
  .then(image => {
    const fontSprite = new SpriteSheet(image);
    
    

    const size = 8;
    const rowLen = image.width;
    for(var i = 0; i < CHARS.length; i++) {
      const x = i * size % rowLen
      const y = Math.floor(i * size / rowLen) * size
      fontSprite.define(CHARS[i], x, y, size, size);
    }

    return new Font(fontSprite, size);
  });
}

*/

function loadFont() {
  return Promise.all([
    loadImage("img/font.png"),
    loadImage("img/characters.gif")
  ])
  .then(([letters, mario]) => {
    const fontSprite = new SpriteSheet(letters);
    
    

    const size = 8;
    const rowLen = letters.width;
    for(var i = 0; i < CHARS.length; i++) {
      const x = i * size % rowLen
      const y = Math.floor(i * size / rowLen) * size
      fontSprite.define(CHARS[i], x, y, size, size);
    }

    const marioSprite = new SpriteSheet(mario);
    marioSprite.define("mario", 276, 44, 16, 16);
    return new Font(fontSprite, marioSprite, size);
  });
}