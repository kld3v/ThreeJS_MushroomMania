import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter {
	constructor() {
		super()

		this.start = Date.now()
		this.current = this.start
		this.elapsed = 0
		this.delta = 16
		window.requestAnimationFrame(() => {
			this.tick()
		})
	}

	tick() {
		// save the current time
		const currentTime = Date.now()
		// compute amount of time since last frame. above saves time at new frame creation, and then delta is the difference between the previous frames current time
		this.delta = currentTime - this.current
		this.current = currentTime

		this.elapsed = this.current - this.start

		this.trigger('tick')
		window.requestAnimationFrame(() => {
			this.tick()
		})
	}
}
