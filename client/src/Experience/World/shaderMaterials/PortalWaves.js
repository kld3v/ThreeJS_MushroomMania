import * as THREE from 'three'
import Experience from '../../Experience.js'
import portalVertex from '../../shaders/portal/vertex.glsl'
import portalFragment from '../../shaders/portal/fragment.glsl'

export default class PortalMaterial {
	constructor() {
		this.experience = new Experience()
		this.time = this.experience.time
		this.material = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 1 },
				uColorStart: { value: new THREE.Color(0xc6c6ff) },
				uColorEnd: { value: new THREE.Color(0x11438e) },
			},
			vertexShader: portalVertex,
			fragmentShader: portalFragment,
			side: THREE.DoubleSide,
		})
	}

	update() {
		this.material.uniforms.uTime.value = this.time.elapsed * 0.001
		// console.log(this.material.uniforms.uTime.value)
	}
}
