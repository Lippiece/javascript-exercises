const getTheTitles = function (input) {
	let newArr = [];
	for (const key in input) {
		const element = input[key];
		newArr.push(element.title);
	}
	return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
