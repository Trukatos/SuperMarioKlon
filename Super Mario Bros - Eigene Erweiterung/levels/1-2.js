//		    '{  "name": "sky", "ranges": [[20, 2, 12, 2]] },' +
const w1l2 = '{' +
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
		'}' +
	      '],' +
              '"entities": [' +
		'{' +
		  '"name": "goomba",' +
		  '"pos": [352, 176]' +
		'}' +
              ']' +
	    '}'
levels[0].push(w1l2);