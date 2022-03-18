import * as THREE from 'three'
import Experience from '../../Experience'
import fireFliesVertex from '../../shaders/fireflies/vertex.glsl'
import fireFliesFragment from '../../shaders/fireflies/fragment.glsl'

export default class FireFlies {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.time = this.experience.time

		/// fly specs
		this.flyCount = 100
		this.flyMaterial = new THREE.ShaderMaterial({
			depthWrite: false,
			blending: THREE.AdditiveBlending,
			transparent: true,
			uniforms: {
				uTime: { value: 0 },
				uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
				uSize: { value: 100 },
			},
			vertexShader: fireFliesVertex,
			fragmentShader: fireFliesFragment,
		})

		this.createFireFlies()
	}

	createFireFlies() {
		/// a geometry for the points to manifest in.
		this.fireFliesGeometry = new THREE.BufferGeometry()

		/// an array that will hold the location of the FireFlies, vec3 ofc.
		this.posArray = new Float32Array(this.flyCount * 3)

		/// another array to hold a scale value for each fly (ie it's size)
		this.scaleArray = new Float32Array(this.flyCount)

		/// fill the scale array with random values
		for (let i = 0; i < this.flyCount; i++) {
			this.scaleArray[i] = Math.random()
		}

		/// fill the position array with random values, a random val for each x,y,z, coordinate.
		// add 0,1,2 to edit the y, z, of each 3 value (vec3) block.
		// multiply mathrandom to add spread and spread factor.
		for (let i = 0; i < this.flyCount; i++) {
			this.posArray[i * 3 + 0] = (Math.random() - 0.5) * 20
			this.posArray[i * 3 + 1] = Math.random() * 4
			this.posArray[i * 3 + 2] = (Math.random() - 0.5) * 20
		}

		/// on the geometry reassign the position of every point according the the position array
		this.fireFliesGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(this.posArray, 3)
		)

		/// set the scale/size of each point(fly)
		this.fireFliesGeometry.setAttribute(
			'aScale',
			new THREE.BufferAttribute(this.scaleArray, 1)
		)

		this.fireFlies = new THREE.Points(this.fireFliesGeometry, this.flyMaterial)

		this.scene.add(this.fireFlies)
	}

	update() {
		this.flyMaterial.uniforms.uTime.value = this.time.elapsed * 0.001
	}

	resize() {
		this.flyMaterial.uniforms.uPixelRatio.value = Math.min(
			window.devicePixelRatio,
			2
		)
	}
}
