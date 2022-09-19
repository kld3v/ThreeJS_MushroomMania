import React, { useReducer } from 'react'
import axios from 'axios'
import StatsContext from './statsContext'
import statsReducer from './statsReducer'

import {
	BOOST_ENERGY,
	BOOST_HEALTH,
	DECREASE_ENERGY,
	DECREASE_HEALTH,
} from '../types'

const StatsState = (props) => {
	const initialState = {
		level: 1,
		XP: 0,
		health: 100,
		energy: 100,
		points: 0,
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
				level: state.level,
				health: state.health,
				energy: state.energy,
				XP: state.XP,
				points: state.points,
				boostHealth,
			}}
		>
			{props.children}
		</StatsContext.Provider>
	)
}

export default StatsState
