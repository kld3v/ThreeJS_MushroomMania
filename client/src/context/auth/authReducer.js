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

const authReducer = (state, action) => {
	switch (action.type) {
		case PLAYER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				player: action.payload,
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			}
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				player: null,
				error: action.payload,
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			}
		default:
			return state
	}
}

export default authReducer
