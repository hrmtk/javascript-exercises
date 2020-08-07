function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, num) => {
		return total + num;
	}, 0);
}

function multiply (array) {
	return array.reduce((total, num) => {
		return total * num;
	}, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
	if (num == 0 || num == 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
