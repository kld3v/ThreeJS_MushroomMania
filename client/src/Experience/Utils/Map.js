import { sRGBEncoding, MeshBasicMaterial } from 'three'
import Experience from '../Experience'

export default class Map {
	constructor(model, bake1, bake2) {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.model = this.resources.items[model]
		bake1 && (this.bake1 = this.resources.items[bake1])
		this.bake1.flipY = false
		this.bake1.encoding = sRGBEncoding
		bake2 && (this.bake2 = this.resources.items[bake2])
		this.bake2.flipY = false
		this.bake2.encoding = sRGBEncoding

		this.bake1Material = new MeshBasicMaterial({ map: this.bake1 })
		this.bake2Material = new MeshBasicMaterial({ map: this.bake2 })

		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('landscape')
			this.debugObject = {}
		}
	}

	setTerrain() {
		this.terrain = this.model.scene
		console.log(this.terrain)
		this.terrain.scale.x = 5
		this.terrain.scale.y = 5
		this.terrain.scale.z = 5

		this.terrain.traverse((child) => {
			child.material = this.bake1Material
		})

		this.smallRocks = this.terrain.children.find(
			(child) => child.name === 'smallRocks'
		)

		this.smallRocks.material = this.bake2Material

		this.scene.add(this.terrain)
	}
}
