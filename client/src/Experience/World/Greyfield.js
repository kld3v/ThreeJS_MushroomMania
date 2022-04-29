import * as THREE from 'three'
import Experience from '../Experience'

export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')

		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.camera = this.experience.camera

		// Resource for landscape
		this.resource = this.resources.items.Greyfield

		console.log(this.resource)

		// debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {}
		}
		// Methods
		this.setModel()
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(1, 1, 1)

		console.log(this.model)
		// this.model.children[1].material = this.bakedMaterial
		this.scene.add(this.model)

		/// add portal material to portals of scene

		if (this.debug.active) {
			this.debugFolder
				.add(this.model.scale, 'x')
				.name('X scale')
				.min(0)
				.max(100)
				.step(0.001)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.model.scale, 'y')
				.name('y scale')
				.min(0)
				.max(100)
				.step(0.001)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.model.scale, 'z')
				.name('z scale')
				.min(0)
				.max(100)
				.step(0.001)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.model.position, 'z')
				.name('z position')
				.min(-500)
				.max(500)
				.step(0.001)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.model.position, 'x')
				.name('x position')
				.min(-500)
				.max(500)
				.step(0.001)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.model.position, 'y')
				.name('y position')
				.min(-500)
				.max(500)
				.step(5)
		}
	}

	update() {
		if (this.debug.active) {
		}
	}
}
