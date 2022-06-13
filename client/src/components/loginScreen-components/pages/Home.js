import React, { useContext } from 'react'
import Inventory from '../../inventory/Inventory.js'
import Experience from '../../../Experience/Experience.js'
// import AuthContext from '../../../context/auth/authContext.js'
import backpack from '../images/backpack.svg'
import ItemContext from '../../../context/Item/itemContext'
import StatsContext from '../../../context/stats/statsContext'
import HealthBar from './gameplayComponents/healthBar'
import EnergyBar from './gameplayComponents/energyBar'
const Home = () => {
	const itemContext = useContext(ItemContext)
	const { hideItems } = itemContext

	const statsContext = useContext(StatsContext)
	const { health, boostHealth, energy } = statsContext

	// eslint-disable-next-line
	const experience = new Experience(document.querySelector('canvas.webgl'))

	const onHide = () => {
		hideItems()
		boostHealth()
	}

	return (
		<>
			<div className='stats'>
				<HealthBar health={health} />
				<EnergyBar energy={energy} />
			</div>
			<div className='grid-4'>
				<Inventory></Inventory>
			</div>

			<img src={backpack} alt='backpack' className='backpack' onClick={onHide} />
		</>
	)
}

export default Home
