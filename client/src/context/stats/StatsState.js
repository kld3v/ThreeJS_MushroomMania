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
		experience: null,
		health: 100,
		energy: 100,
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
				experience: state.experience,
				boostHealth,
			}}
		>
			{props.children}
		</StatsContext.Provider>
	)
}

export default StatsState
