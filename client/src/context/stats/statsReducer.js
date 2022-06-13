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

const statsReducer = (state, action) => {
	switch (action.type) {
		case BOOST_HEALTH:
			return {
				...state,
				health: state.health++,
			}
		case DECREASE_HEALTH:
			return {
				...state,
				health: state.health--,
			}
		default:
			break
	}
}
export default statsReducer
