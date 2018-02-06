'use strict'

let tree = number => {
	if (number < 3) {
		return null;
	} 

	let space_repeater = number - 2;
	let result = "";
	const init_space_repeater = space_repeater;

	for (let star_repeater = 0; star_repeater < number - 1; star_repeater++, space_repeater--) {
		result += " ".repeat(space_repeater) + "*".repeat(2 * star_repeater + 1) + " ".repeat(space_repeater) + "\n";
	}
	result += " ".repeat(init_space_repeater) + "|" + " ".repeat(init_space_repeater) + "\n";
	
	return result;
};