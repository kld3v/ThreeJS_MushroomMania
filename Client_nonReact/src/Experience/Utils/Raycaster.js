import * as THREE from 'three'
import Experience from '../Experience'
import EventEmitter from './EventEmitter'

export default class Raycaster extends EventEmitter {
	constructor(resource, camPos) {
		super()

		console.log('raycaster instantiated!')
		this.experience = new Experience()
		this.resource = resource
		this.cameraPosition = camPos
		this.camera = this.experience.camera
		// for use with mouse targeting
		// this.sizes = this.experience.sizes
		// this.mouse = new THREE.Vector2()

		// this.camera = this.experience.camera

		// create Raycaster
		this.createRaycaster()
	}

	createRaycaster() {
		this.raycaster = new THREE.Raycaster()
		// this.rayOrigin = this.camera.controls.getObject().position
		this.rayOrigin = this.cameraPosition
		this.rayDirection = new THREE.Vector3(0, -100, 0)
		this.rayDirection.normalize()
		this.raycaster.set(this.rayOrigin, this.rayDirection)

		console.log(this.resource, this.cameraPosition)
		console.log(this.camera)
		// for use with mouse targeting
		// window.addEventListener('mousemove', (e) => {
		// 	this.mouse.x = (e.clientX / this.sizes.width) * 2 - 1
		// 	this.mouse.y = -(e.clientY / this.sizes.height) * 2 + 1
		// 	this.trigger('mousemoved')
		// })
	}

	update() {
		this.rayOrigin = this.cameraPosition
		this.raycaster.set(this.rayOrigin, this.rayDirection)
		this.intersectObjects = this.raycaster.intersectObjects(
			this.resource.children,
			true
		)
		if (this.intersectObjects.length) {
			this.distanceToGround = this.intersectObjects[0].distance
			this.camera.updatePlayerHeight(this.distanceToGround)
		}
	}
}
