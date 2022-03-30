const reverseString = function (str) {
	let arr = str.split("");
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		const char = arr[i];
		newArr.push(char);
	}

	let newStr = newArr.join("");
	return newStr;
};
// Do not edit below this line
module.exports = reverseString;
