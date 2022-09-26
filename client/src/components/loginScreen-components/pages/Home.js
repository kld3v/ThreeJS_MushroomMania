import React, { useEffect, useState } from 'react'
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
	const experience = new Experience(document.querySelector('canvas.webgl'))

	const [, itemDispatch] = useItem()
	const [statsState, statsDispatch] = useStats()

	const [flyAgaric, setflyAgaric] = useState(false)

	useEffect(() => {
		getStats(statsDispatch)
	}, [])

	const { health, energy, XP, points, level } = statsState

	const onHide = () => {
		hideItems(itemDispatch)
	}

	const XPGain = (gain) => {
		console.log(XP)
		let newXP = XP + gain
		increaseXP(statsDispatch, {
			experience: newXP,
		})
	}
	experience.on('flyAgaric', () => {
		XPGain(10)
	})
	experience.on('deathCap', () => {
		XPGain(0)
	})
	experience.on('hornOfPlenty', () => {
		XPGain(40)
	})

	return (
		<>
			<div className='stats'>
				<HealthBar health={health ? health : 100} />
				<EnergyBar energy={energy && energy} />
				<ul className='statsList'>
					<li>Level: {level}</li>
					<li>XP: {XP}</li>
					<li>Points: {points}</li>
				</ul>
			</div>

			<div className='grid-4'>
				<Inventory></Inventory>
			</div>

			<img src={backpack} alt='backpack' className='backpack' onClick={onHide} />
		</>
	)
}

export default Home
