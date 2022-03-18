import Stats from 'stats.js'

export default class FrameCount {
	constructor() {
		this.stats = new Stats()
		this.createStats()
	}

	createStats() {
		this.stats.showPanel(0)
		document.body.appendChild(this.stats.dom)
	}
}
