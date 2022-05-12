import * as THREE from 'three'
import Experience from '../Experience'
import TestCharacter2 from './characters/TestCharacter2'
export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.camera = this.experience.camera
		this.testCharacter = new TestCharacter2()

		// Resource for landscape
		this.resource = this.resources.items.Greyfield
		// need to get rid of 400 leaf meshes with new blender model
		console.log(this.resource)

		// debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {}
		}
		// Methods

		// this.setModel()
		this.setTempTerrain()
	}

	setTempTerrain() {
		// add temporary setting to scene
		this.floor = new THREE.Mesh(
			new THREE.PlaneGeometry(4000, 4000),
			new THREE.MeshPhongMaterial({ color: 0x991111, depthWrite: false })
		)
		this.floor.rotation.x = -Math.PI / 2
		this.floor.receiveShadow = true
		this.scene.add(this.floor)
		this.light = new THREE.HemisphereLight('red', 'white', 10)

		this.scene.add(this.light)
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(10, 10, 10)
		this.model.position.set(24.604, -23, -210.74)

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
		// this.testCharacter.animate()
	}
}
