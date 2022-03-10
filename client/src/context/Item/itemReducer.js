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

		// not working, need to look at. If desperate use current state etc.
		// case EQUIP_ITEM:
		// 	return {
		// 		...state,
		// 		items: state.items.map((item) => {
		// 			if (item.id === action.payload.id) {
		// 				return {
		// 					id: item.id,
		// 					name: item.name,
		// 					material: item.material,
		// 					value: item.value,
		// 					equipped: !item.equipped,
		// 					image: item.image,
		// 				}
		// 			} else {
		// 				return item
		// 			}
		// 		}),
		// 	}

		default:
			return state
	}
}
