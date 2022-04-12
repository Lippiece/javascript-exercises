const findTheOldest = function (input) {
	var currentTime = new Date();
	var year = currentTime.getFullYear();

	const oldest = input.reduce(
		(a, b) => {
			if (a.yearOfDeath === undefined) {
				a.yearOfDeath = year;
			}
			if (b.yearOfDeath === undefined) {
				b.yearOfDeath = year;
			}
			let ageA = a.yearOfDeath - a.yearOfBirth;
			let ageB = b.yearOfDeath - b.yearOfBirth;
	);
};

// Do not edit below this line
module.exports = findTheOldest;
