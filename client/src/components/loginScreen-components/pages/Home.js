import React, { useEffect } from 'react'
import Inventory from '../../inventory/Inventory.js'
import Experience from '../../../Experience/Experience.js'

import backpack from '../images/backpack.svg'

import HealthBar from './gameplayComponents/healthBar'
import EnergyBar from './gameplayComponents/energyBar'
import { useItem, hideItems } from '../../../context/Item/ItemState.js'
import {
	useStats,
	getStats,
	increaseXP,
} from '../../../context/stats/StatsState'
const Home = () => {
	const [, itemDispatch] = useItem()

	const [statsState, statsDispatch] = useStats()

	const { health, energy, XP, points, level } = statsState

	// eslint-disable-next-line
	const experience = new Experience(document.querySelector('canvas.webgl'))

	const onHide = () => {
		hideItems(itemDispatch)
	}

	const XPgain = () => {
		console.log(XP)
		let newXP = XP + 10
		increaseXP(statsDispatch, {
			experience: newXP,
		})
	}

	useEffect(() => {
		getStats(statsDispatch)

		//eslint-disable-next-line
	}, [statsDispatch])

	return (
		<>
			<div className='stats'>
				<HealthBar health={health} />
				<EnergyBar energy={energy} />
				<ul className='statsList'>
					<li>Level: {level}</li>
					<li>XP: {XP}</li>
					<li>Points: {points}</li>
				</ul>
			</div>
			<button onClick={XPgain}> hello click for XP: TEST </button>
			<div className='grid-4'>
				<Inventory></Inventory>
			</div>

			<img src={backpack} alt='backpack' className='backpack' onClick={onHide} />
		</>
	)
}

export default Home
