import * as THREE from 'three'

import Experience from '../../Experience'

export default class ItemAdd {
	constructor(itemName) {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.item = this.resources.items[itemName]
		this.trunkTexture = this.resources.items.trunk
		this.materialTrunk = new THREE.MeshBasicMaterial({ map: this.trunkTexture })
		this.addItem()
	}

	addItem() {
		let random = 0.5 - Math.random()
		this.axe = this.item.scene

		this.axe.position.set(
			-271.60593305193817 + random,
			19.999999999999936,
			777.533360142042 + random
		)
		this.axe.children[3].material = this.materialTrunk
		this.scene.add(this.axe)
	}
}
