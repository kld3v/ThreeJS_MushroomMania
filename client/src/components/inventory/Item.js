import React from 'react'
import PropTypes from 'prop-types'
import { useItem, deleteItem } from '../../context/Item/ItemState'

const Item = ({ item }) => {
	const { _id, name, latin, description } = item

	const [state, dispatch] = useItem()

	const onDelete = () => {
		deleteItem(dispatch, _id)
	}

	return (
		<div className='card bg-light'>
			<h3 className='text-primary'>{name}</h3>

			<h5 className='text-secondary'>{latin}</h5>

			<p className='description'>{description}</p>

			<button className='btn btn-danger btn-sm' onClick={onDelete}>
				Eat
			</button>
		</div>
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
}

export default Item
