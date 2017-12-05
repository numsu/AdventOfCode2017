// noprotect
(function() {
	var myInput = 289326;

	var makeSpiral = function(input) {

		var size = Math.ceil(Math.sqrt(input));
		var spiral = [];
		var n = 1;

		var setValue = function() {
			if (x === -1) {
			  x = size - 1;
			}
			spiral[x][y] = n;
			n++;
		};

		var direction = {
			right: function(times) {
				for (var i = 0; i < times; i++) {
					setValue();
					x++;
					if (n > input) break;
				}
			},
			left: function(times) {
				for (var i = 0; i < times; i++) {
					setValue();
					x--;
					if (n > input) break;
				}
			},
			up: function(times) {
				for (var i = 0; i < times; i++) {
					setValue();
					y++;
					if (n > input) break;
				}
			},
			down: function(times) {
				for (var i = 0; i < times; i++) {
					setValue();
					y--;
					if (n > input) break;
				}
			}
		};

		// Init spiral
		for (var i1 = 0; i1 < size; i1++) {
			spiral[i1] = [];
			for (var i2 = 1; i2 < size; i2++) {
			  spiral[i1][i2] = 0;
			}
		}

		if (size % 2 === 0) {
			x = size / 2 - 1;
			y = size / 2 - 1;
		} else {
			x = Math.floor(size / 2);
			y = Math.floor(size / 2);
		}

		for (var i3 = 1; i3 < size; i3++) {
			if (i3 % 2 === 1) {
				direction.up(i3);
				direction.left(i3);
			} else {
				direction.down(i3);
				direction.right(i3);
			}
		}

		if (size % 2 === 1) {
			direction.up(size);
		} else {
			direction.down(size);
		}

		return spiral;
	};

	var getCoordinates = function(spiral, n) {
		for (var i = 0; i < spiral.length; i++) {
			for (var ii = 0; ii < spiral[i].length; ii++) {
				if (spiral[i][ii] === n) return { y: i, x: ii };
			}
		}
	};

	var calculateManhattanDistance = function(source, target) {
		return Math.abs(source.x - target.x) + Math.abs(source.y - target.y);
	};

	var mySpiral = makeSpiral(myInput);
	var sourceCoordinates = getCoordinates(mySpiral, myInput);
	var targetCoordinates = getCoordinates(mySpiral, 1);

	console.log(calculateManhattanDistance(sourceCoordinates, targetCoordinates));

})();