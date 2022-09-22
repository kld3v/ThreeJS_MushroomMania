import {
	GET_STATS,
	BOOST_HEALTH,
	DECREASE_HEALTH,
	INCREASE_POINTS,
	ADD_XP,
	UPDATE_HISTORY,
	ERROR,
} from '../types'

const statsReducer = (state, action) => {
	switch (action.type) {
		case GET_STATS:
			return {
				...state,
				level: action.payload.level,
				XP: action.payload.experience,
				history: [action.payload.history],
			}
		case BOOST_HEALTH:
			return {
				...state,
				health: state.health + 10,
			}
		case DECREASE_HEALTH:
			return {
				...state,
				health: state.health - 10,
			}
		case INCREASE_POINTS:
			return {
				...state,
				points: action.payload.points,
			}
		case ADD_XP:
			return {
				...state,
				XP: action.payload.experience,
			}
		case UPDATE_HISTORY:
			return {
				...state,
				history: [...state.history, action.payload.history],
			}
		default:
			break
	}
}
export default statsReducer
