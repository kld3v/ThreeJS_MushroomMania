import React, { Fragment, useEffect } from 'react'
import { useItem, getItems } from '../../context/Item/ItemState.js'

import Item from './Item'

const Inventory = () => {
	const [state, dispatch] = useItem()
	const { items, visible } = state

	useEffect(() => {
		getItems(dispatch)

		//eslint-disable-next-line
	}, [dispatch, visible])

	console.log(visible)
	console.log(items)
	const displayItems = items.map((item) => <Item key={item._id} item={item} />)
	return (
		<Fragment>
			{/* {items !== null && !loading ? <AddItem /> : <Spinner />} */}
			{visible ? displayItems : null}
		</Fragment>
	)
}

export default Inventory
