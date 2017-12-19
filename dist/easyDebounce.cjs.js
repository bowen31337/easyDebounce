'use strict';

let timeout;

const debounce = (func, wait=200, immediate=false) => (...args) => {
	const later = () => {
		timeout = null;
		if ( !immediate ) {
			func.apply(null, args);
		}
	};
	let callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if ( callNow ) {
		func.apply(null, args);
	}
};

module.exports = debounce;
