import * as THREE from 'three'
import Experience from '../../Experience'

export default class BasicTreeL {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// resource
		this.resource = this.resources.items.basicTreeL

		this.setModel()
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(0.25, 0.25, 0.25)
		this.model.position.set(-3.728, 0, -4.2)
		this.scene.add(this.model)

		this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.castShadow = true
			}
		})
	}
}
