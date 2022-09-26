import React from 'react'
import PropTypes from 'prop-types'
import { useItem, deleteItem } from '../../context/Item/ItemState'
import sound from './mushroomMunchEdited.mp3'

const Item = ({ item }) => {
	const { _id, name, latin, description } = item

	const [, dispatch] = useItem()

	const eatSound = new Audio(sound)

	const onDelete = () => {
		eatSound.play()
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
