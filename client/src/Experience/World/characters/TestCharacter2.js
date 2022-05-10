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
	}
}
