const fibonacci = function (input) {
	if (input < 0) {
		return "OOPS";
	}
	let seq = [1, 1];
	for (let i = 2; i < parseInt(input); i++) {
		seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
	}
	return seq[seq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
