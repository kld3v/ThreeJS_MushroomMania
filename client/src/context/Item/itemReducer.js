import {
	ADD_ITEM,
	DELETE_ITEM,
	ITEM_ERROR,
	GET_ITEMS,
	// EQUIP_ITEM,
	HIDE_ITEMS,
} from '../types.js'

export default (state, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload],
				loading: false,
			}
		case GET_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false,
			}
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item._id !== action.payload),
				loading: false,
			}
		case HIDE_ITEMS:
			return {
				...state,
				visible: !state.visible,
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
		case ITEM_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			}
		default:
			return state
	}
}
