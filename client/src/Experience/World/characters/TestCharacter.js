import Experience from '../../Experience'
import * as THREE from 'three'

export default class TestCharacter {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.resource = this.resources.items.TestCharacter
		this.resourceTexture = this.resources.items.TestCharacterTexture
		this.time = this.experience.time

		// animations
		this.mixer = null
		this.animationCount = 0
		this.anims = [
			(this.pointing = this.resources.items.PointingGesture.animations[0]),
			(this.running = this.resources.items.Running.animations[0]),
			(this.turn = this.resources.items.Turn.animations[0]),
			(this.walkingBackward = this.resources.items.WalkingBackward.animations[0]),
			(this.walking = this.resources.items.Walking.animations[0]),
		]

		this.anims[0].name = 'Pointing'
		this.anims[1].name = 'Running'
		this.anims[2].name = 'Turn'
		this.anims[3].name = 'WalkingBackward'
		this.anims[4].name = 'Walking'

		this.allAnims = this.resource.animations.concat(this.anims)
		console.log(this.allAnims)
		this.resource.animations = this.allAnims

		this.clock = new THREE.Clock()
		this.previousTime = 0

		// CONTROLS

		this.createCharacter()
		this.animate()
	}

	createCharacter() {
		// add model to scene
		this.model = this.resource

		this.model.traverse((child) => {
			if (child.isMesh) {
				child.castShadow = true
				child.receiveShadow = false
				child.material.map = this.resourceTexture
			}
		})

		this.scene.add(this.model)

		// handle animations

		this.mixer = new THREE.AnimationMixer(this.model)
		console.log(this.mixer)
		this.action = this.mixer.clipAction(
			this.resource.animations[this.animationCount]
		)
		this.action.play()
	}

	animate() {
		this.elapsedTime = this.clock.getElapsedTime()
		this.deltaTime = this.elapsedTime - this.previousTime
		this.previousTime = this.elapsedTime

		if (this.mixer) {
			this.mixer.update(this.deltaTime)
		}

		window.requestAnimationFrame(() => {
			this.animate()
		})
	}
}
