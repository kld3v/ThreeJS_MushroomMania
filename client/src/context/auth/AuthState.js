import React, { useReducer, useContext, useEffect } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer.js'
import setAuthToken from '../../utils/setAuthToken'

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	PLAYER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types.js'

export const useAuth = () => {
	const { state, dispatch } = useContext(AuthContext)
	return [state, dispatch]
}

// load player
export const loadPlayer = async (dispatch) => {
	try {
		const res = await axios.get('/api/auth')
		console.log(res)
		dispatch({ type: PLAYER_LOADED, payload: res.data })
	} catch (err) {
		dispatch({ type: AUTH_ERROR })
	}
}

// register player
export const register = async (dispatch, formData) => {
	try {
		const res = await axios.post('/api/players', formData)
		console.log(res)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		})
		loadPlayer(dispatch)
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.msg,
		})
	}
}

// log in player
export const loginPlayer = async (dispatch, formData) => {
	try {
		const res = await axios.post('/api/auth', formData)
		console.log(res)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		})
		loadPlayer(dispatch)
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.msg,
		})
	}
}
// logout player
export const logoutPlayer = (dispatch) => {
	dispatch({
		type: LOGOUT,
	})
}
// clear errors
export const clearErrors = (dispatch) => {
	dispatch({ type: CLEAR_ERRORS })
}

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: true,
		player: null,
		error: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	setAuthToken(state.token)

	if (state.loading) {
		loadPlayer(dispatch)
	}

	useEffect(() => {
		setAuthToken(state.token)
	}, [state.token])

	console.log(state.token)
	return (
		<AuthContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
