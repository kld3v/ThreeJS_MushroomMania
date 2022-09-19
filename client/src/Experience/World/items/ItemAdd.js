import Experience from '../../Experience'

export default class ItemAdd {
	constructor(itemName) {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.item = this.resources.items[itemName]

		this.randomX = (Math.random() - 0.5) * 500
		this.randomZ = (Math.random() - 0.5) * 500
		this.addItem()
	}

	addItem() {
		this.mushroom = this.item.scene

		this.mushroom.scale.x = 5
		this.mushroom.scale.y = 5
		this.mushroom.scale.z = 5

		this.mushroom.position.x = this.randomX
		this.mushroom.position.z = this.randomZ

		this.scene.add(this.mushroom)
	}

	awardPlayer() {
		console.log('player Awarded')
	}
}
