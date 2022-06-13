import React, { useReducer } from 'react'
import axios from 'axios'
import StatsContext from './statsContext'
import statsReducer from './statsReducer'

import {
	BOOST_ENERGY,
	BOOST_HEALTH,
	INCREASE_AGILITY,
	INCREASE_INTELLECT,
	INCREASE_STRENGTH,
	DECREASE_ENERGY,
	DECREASE_HEALTH,
	DECREASE_AGILITY,
	DECREASE_INTELLECT,
	DECREASE_STRENGTH,
} from '../types'

const StatsState = (props) => {
	const initialState = {
		health: 90,
		energy: 100,
		agility: 10,
		strength: 10,
		intellect: 10,
	}

	const [state, dispatch] = useReducer(statsReducer, initialState)

	// increase Health
	const boostHealth = () => {
		dispatch({
			type: BOOST_HEALTH,
		})
	}

	return (
		<StatsContext.Provider
			value={{
				health: state.health,
				energy: state.energy,
				agility: state.agility,
				strength: state.strength,
				intellect: state.intellect,
				boostHealth,
			}}
		>
			{props.children}
		</StatsContext.Provider>
	)
}

export default StatsState
