import * as THREE from 'three'
import Experience from '../Experience'
import PortalMaterial from './shaderMaterials/PortalWaves.js'
import LakeMaterial from './shaderMaterials/LakeMaterial.js'
import SunMaterial from './shaderMaterials/SunMaterial.js'
import Raycaster from '../Utils/Raycaster.js'
export default class Greyfield {
	constructor() {
		console.log('Greyfield model instantiated!')

		this.experience = new Experience()
		this.scene = this.experience.scene
		// this.resources = this.experience.resources
		this.time = this.experience.time
		this.camera = this.experience.camera

		// Resource for landscape
		// this.resource = this.resources.items.Greyfield
		// this.bakedTexture = this.resources.items.bakedTexture
		// this.bakedTexture.flipY = false
		// this.bakedTexture.encoding = THREE.sRGBEncoding
		// this.bakedMaterial = new THREE.MeshBasicMaterial({ map: this.bakedTexture })

		/// shaderMaterials
		// this.portalMaterial = new PortalMaterial()
		// this.lakeMaterial = new LakeMaterial()
		// this.sunMaterial = new SunMaterial()

		// debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {
				allowRaycaster: true,
			}
		}
		// Methods
		this.setModel()

		// set up raycaster
		this.raycaster = new Raycaster(
			this.model,
			this.camera.controls.getObject().position
		)
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(20, 20, 20)
		this.model.position.x = -140
		this.model.position.y = -300
		this.model.position.z = 487

		console.log(this.model)
		// this.model.children[1].material = this.bakedMaterial
		this.scene.add(this.model)

		// 	/// add portal material to portals of scene
		// 	this.portalMeshEntrance = this.model.children.find(
		// 		(child) => child.name === 'Circle'
		// 	)
		// 	this.portalMeshEntrance.material = this.portalMaterial.material

		// 	this.portalMeshExit = this.model.children.find(
		// 		(child) => child.name === 'Circle001'
		// 	)
		// 	this.portalMeshExit.material = this.portalMaterial.material

		// 	/// Add material to lake
		// 	this.lakeMesh = this.model.children.find(
		// 		(child) => child.name === 'Landscape_plane001'
		// 	)
		// 	this.lakeMesh.material = this.lakeMaterial.material

		// 	/// Add material to sun
		// 	this.sunMesh = this.model.children.find((child) => child.name === 'sun')
		// 	this.sunMesh.material = this.sunMaterial.material

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
		if (this.debug.active) {
			this.debugFolder
				.add(this.debugObject, 'allowRaycaster')
				.name('allow raycaster?')
		}
	}

	update() {
		// this.portalMaterial.update()
		// this.lakeMaterial.update()
		// this.sunMaterial.update()
		if (this.debug.active) {
			if (this.debugObject.allowRaycaster) {
				this.raycaster.update()
			}
		}

		// this.camera.updatePlayerHeight()
	}
}
