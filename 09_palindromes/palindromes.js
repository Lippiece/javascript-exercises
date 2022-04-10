// /[^a-zA-Z]/g -- remove non-letters

const palindromes = function (string) {
	const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
	return processedString.split("").reverse().join("") == processedString;
};
palindromes("A big brown fox?");

// Do not edit below this line
module.exports = palindromes;
