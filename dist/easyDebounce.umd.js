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
			var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
				o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
			return function() {
				for (var u = arguments.length, i = Array(u), l = 0; l < u; l++)
					i[l] = arguments[l]
				var r = o && !e
				clearTimeout(e),
					(e = setTimeout(function() {
						;(e = null), o || n.apply(null, i)
					}, t)),
					r && n.apply(null, i)
			}
		}
	return (
		(n.clear = function() {
			e && (clearTimeout(e), (e = null))
		}),
		n
	)
})
