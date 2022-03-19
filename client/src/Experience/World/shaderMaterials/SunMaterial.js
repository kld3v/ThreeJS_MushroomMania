import * as THREE from 'three'
import Experience from '../../Experience.js'
import SunVertex from '../../shaders/lake/vertex.glsl'
import SunFragment from '../../shaders/lake/fragment.glsl'

export default class SunMaterial {
	constructor() {
		this.experience = new Experience()
		this.time = this.experience.time
		this.debugObject = {
			depthColor: '#611e01',
			surfaceColor: '#d0d8e6',
		}
		this.material = new THREE.ShaderMaterial({
			vertexShader: SunVertex,
			fragmentShader: SunFragment,
			uniforms: {
				uTime: { value: 0 },

				uBigWavesElevation: { value: 0 },
				uBigWavesFrequency: { value: new THREE.Vector2(10, 9.403) },
				uBigWavesSpeed: { value: 0.656 },

				uSmallWavesElevation: { value: 0.119 },
				uSmallWavesFrequency: { value: 4.531 },
				uSmallWavesSpeed: { value: 0.301 },
				uSmallIterations: { value: 10 },

				uDepthColor: { value: new THREE.Color(this.debugObject.depthColor) },
				uSurfaceColor: { value: new THREE.Color(this.debugObject.surfaceColor) },
				uColorOffset: { value: 0.065 },
				uColorMultiplier: { value: 5 },
			},
		})

		// Debug
		this.debug = this.experience.debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Sun')
		}
		this.setDebug()
	}

	setDebug() {
		if (this.debug.active) {
			this.debugFolder
				.add(this.material.uniforms.uBigWavesElevation, 'value')
				.min(0)
				.max(1)
				.step(0.001)
				.name('uBigWavesElevation')
			this.debugFolder
				.add(this.material.uniforms.uBigWavesFrequency.value, 'x')
				.min(0)
				.max(10)
				.step(0.001)
				.name('uBigWavesFrequencyX')
			this.debugFolder
				.add(this.material.uniforms.uBigWavesFrequency.value, 'y')
				.min(0)
				.max(10)
				.step(0.001)
				.name('uBigWavesFrequencyY')
			this.debugFolder
				.add(this.material.uniforms.uBigWavesSpeed, 'value')
				.min(0)
				.max(4)
				.step(0.001)
				.name('uBigWavesSpeed')

			this.debugFolder
				.add(this.material.uniforms.uSmallWavesElevation, 'value')
				.min(0)
				.max(1)
				.step(0.001)
				.name('uSmallWavesElevation')
			this.debugFolder
				.add(this.material.uniforms.uSmallWavesFrequency, 'value')
				.min(0)
				.max(30)
				.step(0.001)
				.name('uSmallWavesFrequency')
			this.debugFolder
				.add(this.material.uniforms.uSmallWavesSpeed, 'value')
				.min(0)
				.max(4)
				.step(0.001)
				.name('uSmallWavesSpeed')
			this.debugFolder
				.add(this.material.uniforms.uSmallIterations, 'value')
				.min(0)
				.max(5)
				.step(1)
				.name('uSmallIterations')

			this.debugFolder
				.add(this.material.uniforms.uColorOffset, 'value')
				.min(0)
				.max(1)
				.step(0.001)
				.name('uColorOffset')
			this.debugFolder
				.add(this.material.uniforms.uColorMultiplier, 'value')
				.min(0)
				.max(10)
				.step(0.001)
				.name('uColorMultiplier')
			this.debugFolder.addColor(this.debugObject, 'depthColor').onChange(() => {
				this.material.uniforms.uDepthColor.value.set(this.debugObject.depthColor)
			})
			this.debugFolder.addColor(this.debugObject, 'surfaceColor').onChange(() => {
				this.material.uniforms.uSurfaceColor.value.set(
					this.debugObject.surfaceColor
				)
			})
		}
	}

	update() {
		this.material.uniforms.uTime.value = this.time.elapsed * 0.001
		// console.log(this.material.uniforms.uTime.value)
	}
}
