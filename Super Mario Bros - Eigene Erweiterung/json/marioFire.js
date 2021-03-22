const marioFire = 
'{ "imageURL": "img/items-objects.png",' +
  '"frames": [' +
	     '{' +
		'"name": "rotate-1",' +
		'"rect": [96, 144, 8, 8]' +
	     '},' +
	     '{' +
		'"name": "rotate-2",' +
		'"rect": [104, 144, 8, 8]' +
	     '},' +
	     '{' +
		'"name": "rotate-3",' +
		'"rect": [96, 152, 8, 8]' +
	     '},' +
	     '{' +
		'"name": "rotate-4",' +
		'"rect": [104, 152, 8, 8]' +
	     '},' +
	     '{' +
		'"name": "splash",' +
		'"rect": [116, 148, 8, 8]' +
	     '}' +
	  '],' +

    '"animations": [' +
    '{' +
      '"name": "rotate",' +
      '"frameLen": 0.005,' +
      '"frames": [' +
        '"rotate-4", ' +
	'"rotate-3",'  +
	'"rotate-2",'   +
	'"rotate-1"'   +
      ']' +
    '}' +
    ']' +
'}';
sprites.marioFire = marioFire;