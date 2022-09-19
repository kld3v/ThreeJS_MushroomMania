import * as THREE from 'three'
import Experience from '../../Experience'
import BasicCharController from './controls/BasicCharController'
import ThirdPersonCamera from './controls/ThirdPersonCamera'
import ItemAdd from '../items/ItemAdd'
export default class TestCharacter {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.camera = this.experience.camera.instance

		this.flyAgaric = new ItemAdd('magicMushrooms')

		this.time = this.experience.time
		this._mixers = []
		this._previousRAF = null

		this._LoadAnimatedModel()
		this._Create_InteractiveRayCaster()
		this._RAF()
	}
	_LoadAnimatedModel() {
		const params = {
			camera: this.camera,
			scene: this.scene,
		}
		this._controls = new BasicCharController(params)
		this._thirdPersonCamera = new ThirdPersonCamera({
			camera: this.camera,
			target: this._controls,
		})
	}
	_Create_InteractiveRayCaster() {
		// Gets the position of the character
		// console.log(this._controls._target.position, 'RAYCASTER ')

		// Gets the rotation of character...
		// console.log(this._controls.Rotation)

		// already a vec3. Interestingly this is updating with the movement of the character. It's just the direction we need to now update....
		this.rayOrigin = this._controls._target.position

		this.rayDirection = this.rayDirection = new THREE.Vector3(0, 0, 1)
		this.rayDirection.normalize()
		this.raycaster = new THREE.Raycaster(this.rayOrigin, this.rayDirection, 0, 3)
		console.log(this.raycaster)
	}
	_RAF() {
		requestAnimationFrame((t) => {
			if (this._previousRAF === null) {
				this._previousRAF = t
				console.log(t)
			}

			this._RAF()

			this._Step(t - this._previousRAF)
			this._previousRAF = t
			// console.log(this.raycaster)
			this.intersectObjects = this.raycaster.intersectObjects(
				this.flyAgaric.mushroom.children
			)
			if (this.intersectObjects.length) {
				this.flyAgaric.awardPlayer()
			}
		})
	}

	_Step(timeElapsed) {
		const timeElapsedS = timeElapsed * 0.001
		if (this._mixers) {
			this._mixers.map((m) => m.update(timeElapsedS))
		}

		if (this._controls) {
			this._controls.Update(timeElapsedS)
		}

		this._thirdPersonCamera.Update(timeElapsedS)
	}
}
