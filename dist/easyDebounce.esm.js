let timeout

const debounce = (func, wait = 200, immediate = false) => (...args) => {
	console.log('debounce detected')
	const later = () => {
		timeout = null
		if (!immediate) {
			func.apply(null, args)
		}
	}
	let callNow = immediate && !timeout
	clearTimeout(timeout)
	timeout = setTimeout(later, wait)
	if (callNow) {
		func.apply(null, args)
	}
}

const clear = () => {
	if (timeout) {
		clearTimeout(timeout)
		timeout = null
	}
}

debounce.clear = clear

export default debounce
