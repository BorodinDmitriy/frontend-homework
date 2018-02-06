'use strict'

const tree = number => {
	if (number < 3) {
		return null;
	} 

	let spaceRepeater = number - 2;
	let result = "";
	const initSpaceRepeater = spaceRepeater;

	for (let starRepeater = 0; starRepeater < number - 1; starRepeater++, spaceRepeater--) {
		result += " ".repeat(spaceRepeater) + "*".repeat(2 * starRepeater + 1) + " ".repeat(spaceRepeater) + "\n";
	}
	result += " ".repeat(initSpaceRepeater) + "|" + " ".repeat(initSpaceRepeater) + "\n";
	
	return result;
};