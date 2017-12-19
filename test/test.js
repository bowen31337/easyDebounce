const debounce = require('../dist/debounced.cjs.js')

const  test = require('tape')

const sinon = require('sinon')

const before = test
const after = test


let clock


before('before', function (assert) {

	assert.pass('set fake timers')
	clock = sinon.useFakeTimers()

	assert.end()
});

test('debounce is func', (assert) => {

	assert.equal(typeof debounce, 'function',"it should be defined as a function")

	assert.end()
});

test('it should debounce with fast timeout', assert => {


		const callback = sinon.spy()

		const fn = debounce(callback, 100)

		setTimeout(fn, 100)
		setTimeout(fn, 150)
		setTimeout(fn, 200)
		setTimeout(fn, 250)

		clock.tick(350)

		assert.equal(callback.callCount,1,"the callback should have been triggered once")
		assert.end()
})

test('it should not debouce before timeout', assert => {


		const callback = sinon.spy()

		const fn = debounce(callback, 100)

		setTimeout(fn, 100)
		setTimeout(fn, 150)

		clock.tick(200)

		assert.equal(callback.callCount,0,"the callback should not have been triggered")
		assert.end()
})

after('after', (assert) => {

	assert.pass('restore timers.')

	clock.restore()

	assert.end()
})
