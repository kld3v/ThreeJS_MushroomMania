import Experience from '../Experience.js'
import Environment from './Environment.js'
import Greyfield from './Greyfield'

export default class World {
	constructor() {
		console.log('world instantiated!')

		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// Wait for resources
		this.resources.on('ready', () => {
			// Setup
			this.greyfield = new Greyfield()
			this.environment = new Environment()
		})
	}

	update() {
		if (this.greyfield) {
			this.greyfield.update()
		}
	}

	resize() {}
}
