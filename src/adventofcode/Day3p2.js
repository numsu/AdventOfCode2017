// noprotect
(function() {
	var myInput = 289326;

	var makeSpiral = function(input) {

		var size = Math.ceil(Math.sqrt(input));
		var spiral = [];
		var n = 1;

		var setValue = function() {
			spiral[x][y] = n;
		};
		
		var getSumOf = function(numbers) {
			return numbers.reduce(function(total, num) {
				return total + num;
			}, 0);
		};
		
		var getApplicableValue = function(cx, cy) {
			// Return coordinate value if it exists and is below current value, else return 0
			return (spiral[cx] && spiral[cx][cy] && spiral[cx][cy] <= n) ? spiral[cx][cy] : 0;
		};
		
		var getSumOfCoordinatesAround = function(cx, cy) {
			return getSumOf([
				getApplicableValue(x, y - 1),
				getApplicableValue(x, y + 1),
				getApplicableValue(x - 1, y),
				getApplicableValue(x - 1, y + 1),
				getApplicableValue(x - 1, y - 1),
				getApplicableValue(x + 1, y),
				getApplicableValue(x + 1, y + 1),
				getApplicableValue(x + 1, y - 1)
			]) || 1;
		}

		var direction = {
			right: function(times) {
				for (var i = 0; i < times; i++) {
					n = getSumOfCoordinatesAround(x, y);
					setValue();
					x++;
					if (n > input) break;
				}
			},
			left: function(times) {
				for (var i = 0; i < times; i++) {
					n = getSumOfCoordinatesAround(x, y);
					setValue();
					x--;
					if (n > input) break;
				}
			},
			up: function(times) {
				for (var i = 0; i < times; i++) {
					n = getSumOfCoordinatesAround(x, y);
					setValue();
					y++;
					if (n > input) break;
				}
			},
			down: function(times) {
				for (var i = 0; i < times; i++) {
					n = getSumOfCoordinatesAround(x, y);
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
				if (n > input) break;
				direction.left(i3);
				if (n > input) break;
			} else {
				direction.down(i3);
				if (n > input) break;
				direction.right(i3);
				if (n > input) break;
			}
		}

		return n;
	};
	
	console.log(makeSpiral(myInput));

})();