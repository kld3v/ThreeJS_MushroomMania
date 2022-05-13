import * as THREE from 'three'
import Experience from '../Experience.js'
export default class Environment {
	constructor() {
		console.log('environment instantiated!')

		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// Debug
		this.debug = this.experience.debug

		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('environment')
		}

		// this.setEnvironmentMap()
		// this.setDirectionLight()
		// this.setHemisphereLight()
		this.setAmbientLight()
	}

	setAmbientLight() {
		this.light = new THREE.AmbientLight(0xffffff, 4)
		this.scene.add(this.light)
	}
	setHemisphereLight() {
		this.light = new THREE.HemisphereLight('white', 'red', 10)
		this.scene.add(this.light)
	}
	setDirectionLight() {
		this.light = new THREE.DirectionalLight('white', 10)
		this.light.lookAt(0, 0, 0)
		this.scene.add(this.light)
	}

	setEnvironmentMap() {
		this.environmentMap = {}
		this.environmentMap.intensity = 2
		this.environmentMap.texture = this.resources.items.environmentMapTexture
		this.environmentMap.texture.encoding = THREE.sRGBEncoding

		this.scene.environment = this.environmentMap.texture
		this.scene.background = this.environmentMap.texture

		this.environmentMap.updateMaterials = () => {
			this.scene.traverse((child) => {
				if (
					child instanceof THREE.Mesh &&
					child.material instanceof THREE.MeshStandardMaterial
				) {
					child.material.envMap = this.environmentMap.texture
					child.material.envMapIntensity = this.environmentMap.intensity
					child.material.needsUpdate = true
				}
			})
		}
		this.environmentMap.updateMaterials()

		// Debug
		if (this.debug.active) {
			this.debugFolder
				.add(this.environmentMap, 'intensity')
				.name('envMapIntensity')
				.min(0)
				.max(4)
				.step(0.001)
				.onChange(this.environmentMap.updateMaterials)
		}
	}
}
