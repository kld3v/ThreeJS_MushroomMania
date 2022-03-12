import React, { useContext, Fragment } from 'react'
import ItemContext from '../../context/Item/itemContext.js'
// import dogHair from '../../resources/doghair.jpg'
import Item from './Item'
import AddItem from './AddItem'

const Inventory = () => {
	const itemContext = useContext(ItemContext)

	const { items } = itemContext

	return (
		<Fragment>
			{/* <AddItem /> */}
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Fragment>
	)
}

export default Inventory
