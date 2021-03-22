const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function Font(sprites, size) {
  this.sprites = sprites;
  this.size = size;

  this.print = function(text, context, x, y) {
    for(var i = 0; i < text.length; i++) {
      this.sprites.draw(text[i], context, x + i * this.size, y);
    }
  }
}
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