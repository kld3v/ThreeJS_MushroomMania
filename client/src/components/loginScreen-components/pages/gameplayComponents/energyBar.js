import React, { useEffect } from 'react'

const EnergyBar = ({ energy }) => {
	console.log(energy)
	let energyRatio = energy / 100

	useEffect(() => {}, [energy])

	return (
		<div id='energy'>
			<div className='progress'>
				<div
					className='progress-bar bg-warning'
					role='progressbar'
					style={{ width: `${energy}%` }}
					aria-valuenow={energyRatio}
					aria-valuemin={0}
					aria-valuemax={100}
				/>
			</div>
		</div>
	)
}

export default EnergyBar
