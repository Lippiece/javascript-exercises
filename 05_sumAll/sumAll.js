const sumAll = function (num1, num2) {
	if (
		typeof num1 != "number" ||
		typeof num2 != "number" ||
		num1 < 0 ||
		num2 < 0
	) {
		return "ERROR";
	} else {
		let output = 0;
		let start = 0;
		let end = 0;
		if (num1 < num2) {
			start = num1;
			end = num2;
		} else {
			start = num2;
			end = num1;
		}
		for (let i = start; i <= end; i++) {
			output += i;
		}
		return output;
	}
};

// Do not edit below this line
module.exports = sumAll;
