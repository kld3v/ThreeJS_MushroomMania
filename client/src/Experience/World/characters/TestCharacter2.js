import Experience from '../../Experience'
import BasicCharController from './controls/BasicCharController'
import ThirdPersonCamera from './controls/ThirdPersonCamera'
export default class TestCharacter {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.camera = this.experience.camera.instance

		this.time = this.experience.time
		this._mixers = []
		this._previousRAF = null

		this._LoadAnimatedModel()
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

	_RAF() {
		requestAnimationFrame((t) => {
			if (this._previousRAF === null) {
				this._previousRAF = t
				console.log(t)
			}

			this._RAF()

			this._Step(t - this._previousRAF)
			this._previousRAF = t
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
