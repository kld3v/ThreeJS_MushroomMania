import * as dat from 'lil-gui'

export default class Debug {
	constructor() {
		this.active = window.location.hash === '#debug'

		if (this.active) {
			this.ui = new dat.GUI({ width: 600 })
			console.log('active!')
		}
	}
}
