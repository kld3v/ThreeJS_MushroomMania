export default class BasicCharControlProxy {
	constructor(animations) {
		this._animations = animations
	}
	get animations() {
		return this._animations
	}
}
