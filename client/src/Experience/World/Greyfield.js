import * as THREE from 'three'
import Experience from '../Experience'

import TestCharacter2 from './characters/TestCharacter2'
import ItemAdd from './items/ItemAdd'
import ItemList from './items/itemList'
export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.time = this.experience.time
		this.camera = this.experience.camera

		// Resource for landscape

		// items
		// this.randomNum = Math.floor(Math.random() * 10)
		// this.itemList = ItemList[this.randomNum]
		// console.log(this.itemList)

		// debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {}
		}
		// Characters
		this.testCharacter = new TestCharacter2()

		// this.addItems()
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

	addItems() {}

	update() {
		if (this.debug.active) {
		}
		// this.testCharacter.animate()
	}
}
