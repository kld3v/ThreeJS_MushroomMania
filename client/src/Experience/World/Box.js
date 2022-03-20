import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Box {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		console.log('box instantiated')

		this.material = new THREE.MeshBasicMaterial({ color: 'red' })
		this.geometry = new THREE.BoxGeometry(1, 1, 1)

		this.setBox()
	}

	setBox() {
		this.box = new THREE.Mesh(this.geometry, this.material)
		this.scene.add(this.box)
	}
}
