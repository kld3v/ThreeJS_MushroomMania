import React, { useEffect } from 'react'

const EnergyBar = ({ energy }) => {
	console.log(energy)
	let energyRatio = energy / 100

	useEffect(() => {
		const energyBar = document.getElementById('energy')
		energyBar.style.transform = `scaleX(${energyRatio})`

		//   return () => {
		//     second
		//   }
	}, [energy])

	return <div id='energy'></div>
}

export default EnergyBar
