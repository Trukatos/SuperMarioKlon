//		    '{  "name": "sky", "ranges": [[20, 2, 12, 2]] },' +
const w1l1 = '{' +
	     '"width": 3392,' +
             '"height": 240,' +
	     '"spriteSheet": "overworld",' +
	     '"layers": [' +
	       '{ "tiles": [' +
	  	    '{  "name": "sky", "ranges": [[0, 212, 0, 14]] },' +
		    '{  "name": "ground", "type": "ground", "ranges": [[0, 69, 12, 2], [71, 15, 12, 2], [89, 64, 12, 2], [155, 57, 12, 2]] },' +
    	  	    '{  "name": "dark-sky", "ranges": [[212, 16, 0, 14]] },' +
                    '{  "name": "dark-ground", "type": "ground", "ranges": [[212, 16, 12, 2]] }' +
	          ']' +
		'},' +
		'{ "tiles": [' +
		    '{  "pattern": "green-hill-big", "ranges": [[0, 9], [48, 9], [96, 9], [144, 9], [192, 9]] },' +
		    '{  "pattern": "green-hill-small", "ranges": [[15, 10], [63, 10], [111, 10], [159, 10], [207, 10]] },' +
		    '{  "pattern": "green-bush-single", "ranges": [[23, 11], [71, 11], [119, 11], [157, 11], [167, 11], [205, 11]] },' +
		    '{  "pattern": "green-bush-double", "ranges": [[41, 11], [89, 11], [137, 11]] },' +
		    '{  "pattern": "green-bush-triple", "ranges": [[11, 11], [59, 11], [107, 11]] }' +
		  ']' +
		'},' +
		'{ "tiles": [' +
		    '{  "pattern": "castle", "ranges": [[202, 6]] },' +
		    '{  "pattern": "flag", "ranges": [[198, 1]] }' +
		  ']' +
		'},' +
   	        '{ "tiles": [' +
		    '{  "name": "bricks", "type": "ground", "ranges": [[20, 8], [22, 8], [24, 8], [77, 8], [79, 8], [80, 8, 4], [91, 3, 4], [94, 8], [100, 2, 8], [118, 8], [121, 3, 4], [128, 4], [129, 2, 8], [131, 4], [168, 2, 8], [171, 8]] },' +
                    '{  "name": "dark-bricks", "type": "ground", "ranges": [[212, 1, 1, 11], [216, 7, 1], [216, 7, 9, 3]] },' +
		    '{  "name": "chance", "type": "ground", "item": "mushroom", "ranges": [[16, 8], [22, 4], [23, 8], [94, 4], [106, 8], [109, 8], [112, 8], [129, 2, 4], [170, 8]] },' +
		    '{  "name": "chance", "type": "ground", "item": "mushroom", "ranges": [[21, 8], [78, 8], [109, 4]] },' +
		    '{  "name": "chocolate", "type": "ground", "ranges": [[134, 4, 11], [135, 3, 10], [136, 2, 9], [137, 8], [140, 4, 11], [140, 3, 10], [140, 2, 9], [140, 8], [148, 5, 11], [149, 4, 10], [150, 3, 9], [151, 2, 8], [155, 4, 11], [155, 3, 10], [155, 2, 9], [155, 8], [181, 9, 11], [182, 8, 10], [183, 7, 9], [184, 6, 8], [185, 5, 7], [186, 4, 6], [187, 3, 5], [188, 2, 4], [198, 11]] },'+
		    //'{  "name": "darkcoin", "ranges": [[216, 7, 8], [216, 7, 6], [217, 5, 4]] },' +
                    '{  "pattern": "pipe-2h", "ranges": [[28, 10], [163, 10], [179, 10]]  },' +
		    '{  "pattern": "pipe-3h", "ranges": [[38, 9]]  },' +
		    '{  "pattern": "pipe-4h", "ranges": [[46, 8]]  },' +
		    '{  "pattern": "pipe-4h", "ranges": [[57, 8]], "warp": {"side": "bottom", "startX": 912, "startY": 128, "endX": 3424, "endY": 0, "leftLimit": 3392, "rightLimit": 3648, "dir": "in"}  },' +
                    '{  "pattern": "pipe-3w", "type": "ground", "ranges": [[225, 10]], "warp": {"side": "right", "startX": 3600, "startY": 160, "endX": 2614, "endY": 160, "dir": "out"}},' +
                    '{  "name": "pipe-vert-left", "type": "ground", "ranges": [[227, 1, 1, 9]] },' + //"tower" over the horizontal pipe
		    '{  "pattern": "cloud-single", "ranges": [[19, 1], [56, 2], [67, 1], [104, 2], [115, 1], [152, 2], [164, 1], [200, 2]]  },' +
		    '{  "pattern": "cloud-double", "ranges": [[36, 1], [84, 1], [132, 1], [181, 1]]  },' +
		    '{  "pattern": "cloud-triple", "ranges": [[27, 2], [75, 2], [123, 2], [172, 2]]  }' +
		  ']' +
		'}' +
	      '],' +
		
	      '"patterns": {' +
		'"flag": {' +
		    '"tiles": [' +
		      	'{  "name": "pole-top", "type": "ground", "ranges": [[0, 0]] },' +
		      	'{  "name": "pole-rod", "type": "ground", "ranges": [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]] }' +
		    ']' +
		'},' +
		'"castle": {' +
		    '"tiles": [' +
		      	'{  "name": "castle-flag", "ranges": [[2, 0]] },' +
		      	'{  "name": "castle-battlements-1", "ranges": [[1, 1], [2, 1], [3, 1], [0, 3], [4, 3]] },' +
		      	'{  "name": "castle-window-left", "ranges": [[1, 2]] },' +
		      	'{  "name": "castle-window-right", "ranges": [[3, 2]] },' +
		      	'{  "name": "castle-battlements-2", "ranges": [[1, 3], [2, 3], [3, 3]] },' +
		      	'{  "name": "castle-brick", "ranges": [[2, 2], [0, 4], [1, 4], [3, 4], [4, 4], [0, 5], [1, 5], [3, 5], [4, 5]] },' +
		      	'{  "name": "castle-door-top", "ranges": [[2, 4]] },' +
		      	'{  "name": "castle-door-bottom", "type": "ground", "ranges": [[2, 5]] }' +
		    ']' +
		'},' +
		'"green-bush-single": {' +
		    '"tiles": [' +
		      	'{  "name": "green-bush-1-1", "ranges": [[0, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[1, 0]] },' +
		      	'{  "name": "green-bush-1-3", "ranges": [[2, 0]] }' +
		    ']' +
		'},' +
		'"green-bush-double": {' +
		    '"tiles": [' +
		      	'{  "name": "green-bush-1-1", "ranges": [[0, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[1, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[2, 0]] },' +
		      	'{  "name": "green-bush-1-3", "ranges": [[3, 0]] }' +
		    ']' +
		'},' +
		'"green-bush-triple": {' +
		    '"tiles": [' +
		      	'{  "name": "green-bush-1-1", "ranges": [[0, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[1, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[2, 0]] },' +
		      	'{  "name": "green-bush-1-2", "ranges": [[3, 0]] },' +
		      	'{  "name": "green-bush-1-3", "ranges": [[4, 0]] }' +
		    ']' +
		'},' +
		'"green-hill-big": {' +
		    '"tiles": [' +
				//top-section
		      	'{  "name": "green-hill-top", "ranges": [[2, 0]] },' +

				//mid-section
		      	'{  "name": "green-hill-left-slope", "ranges": [[1, 1]] },' +
		      	'{  "name": "green-hill-left-eyes", "ranges": [[2, 1]] },' +
		      	'{  "name": "green-hill-right-slope", "ranges": [[3, 1]] },' +
				
				//bottom-section
		      	'{  "name": "green-hill-left-slope", "ranges": [[0, 2]] },' +
		      	'{  "name": "green-hill-left-eyes", "ranges": [[1, 2]] },' +
		      	'{  "name": "green-hill-mid", "ranges": [[2, 2]] },' +
		      	'{  "name": "green-hill-right-eyes", "ranges": [[3, 2]] },' +
		      	'{  "name": "green-hill-right-slope", "ranges": [[4, 2]] }' +
		    ']' +
		'},' +
		'"green-hill-small": {' +
		    '"tiles": [' +
				//top-section
		      	'{  "name": "green-hill-top", "ranges": [[2, 0]] },' +

				//bottom-section
		      	'{  "name": "green-hill-left-slope", "ranges": [[1, 1]] },' +
		      	'{  "name": "green-hill-left-eyes", "ranges": [[2, 1]] },' +
		      	'{  "name": "green-hill-right-slope", "ranges": [[3, 1]] }' +
		    ']' +
		'},' +
		'"cloud-single": {' +
		    '"tiles": [' +
		      	'{  "name": "cloud-1-1", "ranges": [[0, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[1, 0]] },'+
		      	'{  "name": "cloud-1-3", "ranges": [[2, 0]] },'+
		      	'{  "name": "cloud-2-1", "ranges": [[0, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[1, 1]] },'+
		      	'{  "name": "cloud-2-3", "ranges": [[2, 1]] }'+
		    ']' +
		'},' +
		'"cloud-double": {' +
		    '"tiles": [' +
		      	'{  "name": "cloud-1-1", "ranges": [[0, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[1, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[2, 0]] },'+
		      	'{  "name": "cloud-1-3", "ranges": [[3, 0]] },'+
		      	'{  "name": "cloud-2-1", "ranges": [[0, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[1, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[2, 1]] },'+
		      	'{  "name": "cloud-2-3", "ranges": [[3, 1]] }'+
		    ']' +
		'},' +
		'"cloud-triple": {' +
		    '"tiles": [' +
		      	'{  "name": "cloud-1-1", "ranges": [[0, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[1, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[2, 0]] },'+
		      	'{  "name": "cloud-1-2", "ranges": [[3, 0]] },'+
		      	'{  "name": "cloud-1-3", "ranges": [[4, 0]] },'+
		      	'{  "name": "cloud-2-1", "ranges": [[0, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[1, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[2, 1]] },'+
		      	'{  "name": "cloud-2-2", "ranges": [[3, 1]] },'+
		      	'{  "name": "cloud-2-3", "ranges": [[4, 1]] }'+
		    ']' +
		'},' +
		'"pipe-section-vert": {' +
		    '"tiles": [' +
		      	'{  "name": "pipe-vert-left", "type": "ground", "ranges": [[0, 0]] },'+
			'{  "name": "pipe-vert-right", "type": "ground", "ranges": [[1, 0]] }'+
		    ']' +
		'},' +
		'"pipe-cap-vert": {' +
		    '"tiles": [' +
		      	'{  "name": "pipe-insert-vert-left", "type": "ground", "ranges": [[0, 0]] },'+
			'{  "name": "pipe-insert-vert-right", "type": "ground", "ranges": [[1, 0]] }'+
		    ']' +
		'},' +
	        '"pipe-cap-hori": {' +
		    '"tiles": [' +
		      	'{  "name": "pipe-insert-hori-top", "type": "ground", "ranges": [[0, 0]] },'+
			'{  "name": "pipe-insert-hori-bottom", "type": "ground", "ranges": [[0, 1]] }'+
		    ']' +
		'},' +
		'"pipe-section-hori": {' +
		    '"tiles": [' +
		      	'{  "name": "pipe-hori-top", "type": "ground", "ranges": [[0, 0]] },'+
			'{  "name": "pipe-hori-bottom", "type": "ground", "ranges": [[0, 1]] }'+
		    ']' +
		'},' +
		'"pipe-back-hori": {' +
		    '"tiles": [' +
		      	'{  "name": "pipe-back-hori-top", "type": "ground", "ranges": [[0, 0]] },'+
			'{  "name": "pipe-back-hori-bottom", "type": "ground", "ranges": [[0, 1]] }'+
		    ']' +
		'},' +
		'"pipe-2h": {' +
		    '"tiles": [' +
			'{  "pattern": "pipe-cap-vert", "ranges": [[0, 0]] },'+
			'{  "pattern": "pipe-section-vert", "ranges": [[0, 1, 1, 1]] }'+

		    ']' +
		'},' +
		'"pipe-3h": {' +
		    '"tiles": [' +
			'{  "pattern": "pipe-cap-vert", "ranges": [[0, 0]] },'+
			'{  "pattern": "pipe-section-vert", "ranges": [[0, 1, 1, 2]] }'+

		    ']' +
		'},' +
		'"pipe-4h": {' +
		    '"tiles": [' +
			'{  "pattern": "pipe-cap-vert", "ranges": [[0, 0]] },'+
			'{  "pattern": "pipe-section-vert", "ranges": [[0, 1, 1, 3]] }'+

		    ']' +
		'},' +
		'"pipe-3w": {' +
		    '"tiles": [' +
			'{  "pattern": "pipe-cap-hori", "ranges": [[0, 0]] },'+
			'{  "pattern": "pipe-section-hori", "ranges": [[1, 0]] },'+
			'{  "pattern": "pipe-back-hori", "ranges": [[2, 0]] }'+

		    ']' +
		'}' +
	      '},' +
	      '"entities": [' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [352, 176]' +
		'},' +

		'{' +
		  '"name": "goomba",' +
		  '"pos": [641, 176]' +
		'},' +

		'{' +
		  '"name": "goomba",' +
		  '"pos": [816, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [840, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1281, 48]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1312, 48]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1554, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1578, 176]' +
		'},' +
		'{' +
		  '"name": "koopa",' +
		  '"pos": [1712, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1826, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1850, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [1985, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [2008, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [2048, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [2072, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [2784, 176]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [2808, 176]' +
		'},' +
		'{' +
		  '"name": "poleFlag",' +
		  '"pos": [3160, 32]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3456, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3472, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3488, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3504, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3520, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3536, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3552, 128]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3456, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3472, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3488, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3504, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3520, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3536, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3552, 96]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3472, 64]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3488, 64]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3504, 64]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3520, 64]' +
		'},' +
		'{' +
		  '"name": "darkCoin",' +
		  '"pos": [3536, 64]' +
		'}' +
	      ']' +
	    '}';
levels[0].push(w1l1);