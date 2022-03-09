import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ItemContext from './itemContext.js'
import itemReducer from './itemReducer.js'
import {
	ADD_ITEM,
	DELETE_ITEM,
	SET_CURRENT,
	CLEAR_CURRENT,
	EQUIP_ITEM,
	FILTER_ITEMS,
	CLEAR_FILTER,
} from '../types.js'

const ItemState = (props) => {
	const initialState = {
		items: [
			{
				id: 1,
				name: 'Magic Stone',
				material: 'rock',
				value: '20 el',
				equipped: true,
				image: '../../resources/magicstone.jpg',
			},
			{
				id: 2,
				name: 'Stray Dog Hair',
				material: 'hair',
				value: '0 el',
				equipped: false,
				image: '../../resources/doghair.jpg',
			},
			{
				id: 3,
				name: 'Crystal Orb',
				material: 'crystal',
				value: '240 el',
				equipped: false,
				image: '../../resources/magicorb.jpg',
			},
		],
	}

	// state allows us to access state and dispatch allows for the sending of objects to our reducer
	const [state, dispatch] = useReducer(itemReducer, initialState)

	// ACTIONS

	// add item
	const addItem = (item) => {
		item.id = uuidv4()
		dispatch({ type: ADD_ITEM, payload: item })
	}
	// delete item
	const deleteItem = (id) => {
		dispatch({ type: DELETE_ITEM, payload: id })
	}
	// set current item

	// clear current item

	// update item

	// filter items

	// clear filter

	return (
		<ItemContext.Provider
			value={{
				items: state.items,
				addItem,
				deleteItem,
			}}
		>
			{props.children}
		</ItemContext.Provider>
	)
}

export default ItemState
