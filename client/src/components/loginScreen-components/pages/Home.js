import React, { useEffect, useState } from 'react'
import Inventory from '../../inventory/Inventory.js'
import Experience from '../../../Experience/Experience.js'

import backpack from '../images/closedBag.png'
import backpackOpen from '../images/openBag.png'

import HealthBar from './gameplayComponents/healthBar'
import EnergyBar from './gameplayComponents/energyBar'
import { useItem, hideItems } from '../../../context/Item/ItemState.js'
import {
	useStats,
	getStats,
	increaseXP,
} from '../../../context/stats/StatsState'
import { Row, Col, Container, Image, Stack, Badge } from 'react-bootstrap'
import sound from './backpackSound.mp3'

const Home = () => {
	const experience = new Experience(document.querySelector('canvas.webgl'))

	const [itemState, itemDispatch] = useItem()
	const { visible } = itemState
	const [statsState, statsDispatch] = useStats()

	const [, setflyAgaric] = useState(false)

	useEffect(() => {
		getStats(statsDispatch)
	}, [statsDispatch])

	const { health, energy, XP, points, level } = statsState

	const backPackSound = new Audio(sound)
	const onHide = () => {
		backPackSound.play()
		hideItems(itemDispatch)
	}

	const XPGain = (gain, mushroom) => {
		console.log(XP)
		let newXP = XP + gain
		if (mushroom === 1) {
			experience.off('flyAgaric')
		} else if (mushroom === 2) {
			experience.off('deathCap')
		} else if (mushroom === 3) {
			experience.off('hornOfPlenty')
		}
		increaseXP(statsDispatch, {
			experience: newXP,
		})
	}
	experience.on('flyAgaric', () => {
		XPGain(10, 1)
	})
	experience.on('deathCap', () => {
		XPGain(0, 2)
	})
	experience.on('hornOfPlenty', () => {
		XPGain(40, 3)
	})

	console.log(visible)

	return (
		<Container fluid>
			<Stack gap={2} className='stats'>
				<HealthBar health={health ? health : 100} />
				<EnergyBar energy={energy && energy} />
				<Container>
					<Row>
						<Col>
							<Badge style={{ width: '100%' }} bg='primary'>
								<h5>Level</h5>{' '}
								<Badge bg='light'>
									<div>{level}</div>{' '}
								</Badge>
							</Badge>
						</Col>
						<Col>
							<Badge style={{ width: '100%' }} bg='warning'>
								<h5>XP</h5>{' '}
								<Badge bg='light'>
									<div>{XP}</div>
								</Badge>
							</Badge>
						</Col>

						<Col>
							<Badge style={{ width: '100%' }} bg='success'>
								<h5>Points</h5> <Badge bg='light'>{points} </Badge>
							</Badge>
						</Col>
					</Row>
				</Container>
			</Stack>

			<Inventory></Inventory>

			<Row>
				<Col>
					<Image
						src={visible ? backpackOpen : backpack}
						alt='backpack'
						className='backpack'
						onClick={onHide}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Home
