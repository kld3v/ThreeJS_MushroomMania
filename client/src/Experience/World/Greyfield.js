import * as THREE from 'three'
import Experience from '../Experience'
import Map from '../Utils/Map'
import TestCharacter2 from './characters/TestCharacter2'

export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.camera = this.experience.camera

		// Map
		this.map = new Map('map1', 'bakedScene', 'bakedSmallRocks')

		// Characters
		this.testCharacter = new TestCharacter2()

		this.map.setTerrain()
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

	update() {}
}
