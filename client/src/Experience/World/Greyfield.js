import * as THREE from 'three'
import Experience from '../Experience'

import TestCharacter2 from './characters/TestCharacter2'
import ItemAdd from './items/ItemAdd'
export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.resource = this.resources.items.mareFolorum

		this.time = this.experience.time
		this.camera = this.experience.camera
		this.testCharacter = new TestCharacter2()

		// Resource for landscape

		// items
		// this.item = this.resources.items.axe
		// this.trunkTexture = this.resources.items.trunk
		this.axe = new ItemAdd('axe')
		// console.log(this.item)
		// debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {}
		}
		// Methods

		// this.setModel()
		this.addItems()
		this.setTempTerrain()
	}

	setTempTerrain() {
		// add temporary setting to scene
		this.floor = new THREE.Mesh(
			new THREE.PlaneGeometry(500, 500, 10, 10),
			new THREE.MeshBasicMaterial({
				color: 0xffffff,
				depthWrite: false,
				wireframe: true,
			})
		)
		this.floor.rotation.x = -Math.PI / 2
		this.floor.receiveShadow = true
		this.scene.add(this.floor)
	}

	setModel() {
		this.model = this.resource.scene
		console.log(this.model)
		this.model.scale.set(50, 50, 50)
		this.model.position.set(-257, -110, -500)

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

	addItems() {
		for (let i = 0; i < 10; i++) {
			this.i = new ItemAdd('axe')
		}
	}

	update() {
		if (this.debug.active) {
		}
		// this.testCharacter.animate()
	}
}
