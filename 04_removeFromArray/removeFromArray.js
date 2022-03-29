const removeFromArray = function (array, target) {
	let workingArr;
	for (let i of array) {
		if (i === target) {
			workingArr = array.splice(target-1, 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
