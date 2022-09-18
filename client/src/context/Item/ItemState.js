import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import ItemContext from './itemContext.js'
import itemReducer from './itemReducer.js'

import {
	ADD_ITEM,
	DELETE_ITEM,
	ITEM_ERROR,
	GET_ITEMS,
	HIDE_ITEMS,
} from '../types.js'

export const useItem = () => {
	const { state, dispatch } = useContext(ItemContext)
	return [state, dispatch]
}

// ACTIONS

// GET ITEMS
export const getItems = async (dispatch) => {
	try {
		const res = await axios.get('/api/items')
		console.log(res.data)
		dispatch({ type: GET_ITEMS, payload: res.data })
	} catch (err) {
		dispatch({ type: ITEM_ERROR, payload: err.response.msg })
	}
}

// add item
export const addItem = async (dispatch, item) => {
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
export const deleteItem = async (dispatch, _id) => {
	try {
		const res = await axios.delete(`/api/items/${_id}`)
		console.log(res.data)
		dispatch({ type: DELETE_ITEM, payload: _id })
	} catch (err) {
		dispatch({ type: ITEM_ERROR, payload: err.response.msg })
	}
}

// hide items
export const hideItems = (dispatch) => {
	dispatch({ type: HIDE_ITEMS })
}

const ItemState = (props) => {
	const initialState = {
		items: [],
		error: null,
		loading: true,
		visible: false,
	}

	const [state, dispatch] = useReducer(itemReducer, initialState)

	return (
		<ItemContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{props.children}
		</ItemContext.Provider>
	)
}

export default ItemState
