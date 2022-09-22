import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import StatsContext from './statsContext'
import statsReducer from './statsReducer'

import {
	GET_STATS,
	BOOST_HEALTH,
	DECREASE_HEALTH,
	INCREASE_POINTS,
	ADD_XP,
	UPDATE_HISTORY,
	ERROR,
} from '../types'

export const useStats = () => {
	const { state, dispatch } = useContext(StatsContext)
	return [state, dispatch]
}

// ACTIONS

// GET Stats
export const getStats = async (dispatch) => {
	try {
		const res = await axios.get('/api/stats')
		console.log(res.data)
		dispatch({ type: GET_STATS, payload: res.data[0] })
	} catch (error) {
		dispatch({ type: ERROR, payload: error.response.msg })
	}
}

// Increase Health
export const boostHealth = (dispatch) => {
	dispatch({ type: BOOST_HEALTH })
}

// Decrease Health
export const decreaseHealth = (dispatch) => {
	dispatch({ type: DECREASE_HEALTH })
}
// Increase Points
export const increasePoints = (dispatch, stats) => {
	dispatch({ type: INCREASE_POINTS, payload: stats })
}
// Increase XP
export const increaseXP = async (dispatch, stats) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	try {
		const res = await axios.put('/api/stats', stats, config)
		console.log(res.data)
		dispatch({ type: ADD_XP, payload: res.data })
	} catch (error) {
		dispatch({ type: ERROR, payload: error.response.msg })
	}
}

// Post a History Record
export const addHistory = async (dispatch, gameLog) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	try {
		const res = await axios.put('/api/stats/history', gameLog, config)
		console.log(res.data)
		dispatch({ type: UPDATE_HISTORY, payload: res.data })
	} catch (error) {
		dispatch({ type: ERROR, payload: error.response.msg })
	}
}

const StatsState = (props) => {
	const initialState = {
		level: 1,
		XP: 0,
		health: 100,
		energy: 100,
		points: 0,
		history: [],
	}

	const [state, dispatch] = useReducer(statsReducer, initialState)

	return (
		<StatsContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{props.children}
		</StatsContext.Provider>
	)
}

export default StatsState
