import React, { useEffect } from 'react'

const HealthBar = ({ health }) => {
	console.log(health)
	let healthRatio = health / 100

	useEffect(() => {
		//   return () => {
		//     second
		//   }
	}, [health])

	return (
		<div>
			<div className='progress'>
				<div
					className='progress-bar bg-danger'
					role='progressbar'
					style={{ width: `${health}%` }}
					aria-valuenow={100}
					aria-valuemin={0}
					aria-valuemax={100}
				/>
			</div>
		</div>
	)
}

export default HealthBar
