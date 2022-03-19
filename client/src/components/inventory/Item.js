import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ItemContext from '../../context/Item/itemContext'

const Item = ({ item }) => {
	const { _id, name, material, value, equipped, image } = item

	const itemContext = useContext(ItemContext)
	const { deleteItem } = itemContext

	const onDelete = () => {
		deleteItem(_id)
	}

	// const onEquip = () => {
	// 	equipItem(id)
	// }

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>{name}</h3>
			<span
				className={
					'badge  ' + (equipped === true ? 'badge-success m-5' : 'badge-primary')
				}
			>
				{equipped ? 'Equipped' : 'Not equipped'}
			</span>
			<ul className='list'>
				<li>{material}</li>
				<li>{value}</li>
				<li>{image}</li>
			</ul>
			<p>
				<button className='btn btn-dark btn-sm'> Equip</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					{' '}
					Discard
				</button>
			</p>
		</div>
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
}

export default Item
