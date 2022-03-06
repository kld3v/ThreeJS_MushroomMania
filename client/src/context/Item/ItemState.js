import React, { useReducer } from 'react'
import uuid from 'uuid'
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
				equipped: false,
			},
			{
				id: 2,
				name: 'Stray Dog Hair',
				material: 'hair',
				value: '0 el',
				equipped: false,
			},
			{
				id: 3,
				name: 'Crystal Orb',
				material: 'crystal',
				value: '240 el',
				equipped: false,
			},
		],
	}

	// state allows us to access state and dispatch allows for the sending of objects to our reducer
	const [state, dispatch] = useReducer()
}
