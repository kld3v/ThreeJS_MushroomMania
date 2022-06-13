import React, { useReducer } from 'react'
import axios from 'axios'

import ItemContext from './itemContext.js'
import itemReducer from './itemReducer.js'

import {
	ADD_ITEM,
	DELETE_ITEM,
	ITEM_ERROR,
	GET_ITEMS,
	// EQUIP_ITEM,
	// CLEAR_ITEMS,
	HIDE_ITEMS,
} from '../types.js'

const ItemState = (props) => {
	const initialState = {
		items: [],
		error: null,
		loading: true,
		visible: false,
	}

	// state allows us to access state and dispatch allows for the sending of objects to our reducer
	const [state, dispatch] = useReducer(itemReducer, initialState)

	// ACTIONS

	// GET ITEMS
	const getItems = async () => {
		try {
			const res = await axios.get('/api/items')
			console.log(res.data)
			dispatch({ type: GET_ITEMS, payload: res.data })
		} catch (err) {
			dispatch({ type: ITEM_ERROR, payload: err.response.msg })
		}
	}

	// add item
	const addItem = async (item) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		try {
			const res = await axios.post('/api/items', item, config)
			console.log(res.data)
			dispatch({ type: ADD_ITEM, payload: res.data })
		} catch (err) {
			dispatch({ type: ITEM_ERROR, payload: err.response.msg })
		}
	}

	// delete item
	const deleteItem = async (_id) => {
		try {
			const res = await axios.delete(`/api/items/${_id}`)
			console.log(res.data)
			dispatch({ type: DELETE_ITEM, payload: _id })
		} catch (err) {
			dispatch({ type: ITEM_ERROR, payload: err.response.msg })
		}
	}

	// hide items
	const hideItems = () => {
		dispatch({ type: HIDE_ITEMS })
	}
	// const clearItems = () => {
	// 	dispatch({ type: CLEAR_ITEMS })
	// }

	// used for setting the current items to a new state for editing, then sent to reducer for action.
	// set current item
	// clear current item

	// update item
	// const equipItem = (id) => {
	// 	dispatch({ type: EQUIP_ITEM, payload: id })
	// }

	// filter items

	// clear filter

	return (
		<ItemContext.Provider
			value={{
				items: state.items,
				error: state.error,
				loading: state.loading,
				visible: state.visible,
				addItem,
				deleteItem,
				getItems,
				hideItems,

				// equipItem,
			}}
		>
			{props.children}
		</ItemContext.Provider>
	)
}

export default ItemState
