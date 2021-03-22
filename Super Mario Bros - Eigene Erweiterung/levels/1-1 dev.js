//		    '{  "name": "sky", "ranges": [[20, 2, 12, 2]] },' +
const w1l1 = '{' +
	     '"spriteSheet": "overworld",' +
	     '"layers": [' +
	       '{ "tiles": [' +
	  	    '{  "name": "sky", "ranges": [[0, 212, 0, 14]] },' +
		    '{  "name": "ground", "type": "ground", "ranges": [[0, 212, 12, 2]] },' +
		    '{  "name": "ground", "type": "ground", "ranges": [[5, 3, 9], [12, 6, 11], [2, 11], [5, 5], [10, 2, 10], [9, 1, 0, 7]] }' +
	          ']' +
		'},' +
   	        '{ "tiles": [' +
		    '{  "name": "bricks", "type": "ground", "ranges": [[27, 5, 9], [83, 3, 9], [86, 6, 5], [96, 3, 5], [99, 9], [105, 2, 9], [123, 5], [126, 3, 5], [132, 4, 5], [133, 2, 9], [171, 4, 9]] },' +
		    '{  "name": "chance", "type": "ground", "ranges": [[2, 2], [23, 9], [28, 9], [30, 9], [29, 5], [84, 9], [99, 5], [114, 5], [111, 9], [114, 9], [117, 9], [133, 2, 5], [173, 9]] },' +
		    '{  "name": "chocolate", "type": "ground", "ranges": [[141, 1, 8], [140, 2, 9], [139, 3, 10], [138, 4, 11], [144, 1, 8], [144, 2, 9], [144, 3, 10], [144, 4, 11], [155, 1, 8], [154, 2, 9], [153, 3, 10], [152, 4, 11], [159, 1, 8], [159, 2, 9], [159, 3, 10], [159, 4, 11], [191, 2, 4], [190, 3, 5], [189, 4, 6], [188, 5, 7], [187, 6, 8], [186, 7, 9], [185, 8, 10], [184, 9, 11]] },'+
                    '{  "pattern": "pipe-2h", "ranges": [[35, 11], [167, 11], [182, 11]]  },' +
		    '{  "pattern": "pipe-3h", "ranges": [[45, 10]]  },' +
		    '{  "pattern": "pipe-4h", "ranges": [[53, 9], [64, 9]]  },' +
		    '{  "pattern": "cloud-single", "ranges": [[2, 2], [25, 2], [35, 3], [44, 2], [64, 3], [74, 2], [80, 3], [90, 2], [108, 3], [118, 2], [128, 3], [138, 2]]  }' +
		  ']' +
		'}' +
	      '],' +
		
	      '"patterns": {' +
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
		'}' +
	      '},' +
	      '"entities": [' +
		'{' +
		  '"name": "koopa",' +
		  '"pos": [260, 0]' +
		'},' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [220, 0]' +
		'}' +
	      ']' +
	    '}';
levels[0].push(w1l1);