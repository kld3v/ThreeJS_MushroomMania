import {
	ADD_ITEM,
	DELETE_ITEM,
	SET_CURRENT,
	CLEAR_CURRENT,
	EQUIP_ITEM,
	FILTER_ITEMS,
	CLEAR_FILTER,
} from '../types.js'

export default (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload],
			}

		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			}
		default:
			return state
	}
}
