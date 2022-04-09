const add = function (input1, input2) {
	return input1 + input2;
};

const subtract = function (input1, input2) {
	return input1 - input2;
};

const sum = function (array) {
	return array.reduce((prev, next) => {
		return prev + next;
	}, 0);
};

const multiply = function (array) {
	return array.reduce((prev, next) => {
		return prev * next;
	}, 1);
};

const power = function (input1, input2) {
	return Math.pow(input1, input2);
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
