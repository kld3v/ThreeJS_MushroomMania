import React, { useContext, Fragment, useEffect } from 'react'
import ItemContext from '../../context/Item/itemContext.js'
// import dogHair from '../../resources/doghair.jpg'
import Item from './Item'
import AddItem from './AddItem'
import Spinner from '../loginScreen-components/layout/Spinner'

const Inventory = () => {
	const itemContext = useContext(ItemContext)

	const { items, getItems, loading, visible } = itemContext

	useEffect(() => {
		getItems()

		//eslint-disable-next-line
	}, [])

	console.log(visible)
	const displayItems = items.map((item) => <Item key={item._id} item={item} />)
	return (
		<Fragment>
			{/* {items !== null && !loading ? <AddItem /> : <Spinner />} */}
			{visible ? displayItems : null}
		</Fragment>
	)
}

export default Inventory
