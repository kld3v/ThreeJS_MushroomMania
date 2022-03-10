import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer.js'
import setAuthToken from '../../utils/setAuthToken'

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types.js'

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		player: null,
		error: null,
	}

	// state allows us to access state and dispatch allows for the sending of objects to our reducer
	const [state, dispatch] = useReducer(authReducer, initialState)

	// load player
	const loadPlayer = async () => {
		//@to-do load token in to global header
		if (localStorage.token) {
			setAuthToken(localStorage.token)
		}
		try {
			const res = await axios.get('/api/auth')

			dispatch({ type: USER_LOADED, payload: res.data })
		} catch (err) {
			dispatch({ type: AUTH_ERROR })
		}
	}
	// register player
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		try {
			const res = await axios.post('/api/players', formData, config)
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			})
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			})
		}
	}

	// log in player
	const loginPlayer = () => {
		console.log('login')
	}
	// logout player
	const logoutPlayer = () => {
		console.log('logout')
	}
	// clear errors
	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS })
	}
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				player: state.player,
				error: state.error,
				register,
				loginPlayer,
				logoutPlayer,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
