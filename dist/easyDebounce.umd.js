!(function(e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = n())
		: 'function' == typeof define && define.amd
			? define(n)
			: (e.easyDebounce = n())
})(this, function() {
	'use strict'
	var e = void 0,
		n = function(n) {
			var o =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
				t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
			return function() {
				for (var u = arguments.length, l = Array(u), i = 0; i < u; i++)
					l[i] = arguments[i]
				console.log('debounce detected')
				var r = t && !e
				clearTimeout(e),
					(e = setTimeout(function() {
						;(e = null), t || n.apply(null, l)
					}, o)),
					r && n.apply(null, l)
			}
		}
	return (
		(n.clear = function() {
			e && (clearTimeout(e), (e = null))
		}),
		n
	)
})
