import React, { Fragment, useEffect } from 'react'
import { useItem, getItems } from '../../context/Item/ItemState.js'

import Item from './Item'
import { Row } from 'react-bootstrap'
const Inventory = () => {
	const [state, dispatch] = useItem()
	const { items, visible } = state

	useEffect(() => {
		getItems(dispatch)

		//eslint-disable-next-line
	}, [dispatch, visible])

	const displayItems = items.map((item) => <Item key={item._id} item={item} />)
	return (
		<Row>
			{/* {items !== null && !loading ? <AddItem /> : <Spinner />} */}
			{visible ? displayItems : null}
		</Row>
	)
}

export default Inventory
