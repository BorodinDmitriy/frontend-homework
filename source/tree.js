'use strict'

String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}

function tree(number) {
	if (number < 3) {
		return null;
	} else {
		var space_repeater = number - 2;
		var result = '', star_repeater = 0;
		var init_space_repeater = space_repeater;
		while (star_repeater < number - 1) {
			result += " ".repeat(space_repeater) + "*".repeat(star_repeater) + "*" + "*".repeat(star_repeater) + " ".repeat(space_repeater) + "\n";
			star_repeater++;
			space_repeater--;
		}
		result += " ".repeat(init_space_repeater) + "|" + " ".repeat(init_space_repeater) + "\n";
		return result;
	}
}