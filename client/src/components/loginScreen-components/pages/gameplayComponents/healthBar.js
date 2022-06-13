import React, { useEffect } from 'react'

const HealthBar = ({ health }) => {
	console.log(health)
	let healthRatio = health / 100

	useEffect(() => {
		const healthBar = document.getElementById('health')
		healthBar.style.transform = `scaleX(${healthRatio})`

		//   return () => {
		//     second
		//   }
	}, [health])

	return <div id='health'></div>
}

export default HealthBar
