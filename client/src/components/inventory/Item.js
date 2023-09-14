import React from 'react'
import PropTypes from 'prop-types'
import { useItem, deleteItem } from '../../context/Item/ItemState'

import { Button, Card, Col, Badge } from 'react-bootstrap'
const Item = ({ item }) => {
	const { _id, name, latin, description } = item

	const [, dispatch] = useItem()

	const onDelete = () => {
		deleteItem(dispatch, _id)
	}
	return (
		<Col>
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant='top'
					src=''
				/>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>{latin}</Card.Subtitle>
					<Card.Text>
						{description} {latin}
					</Card.Text>
					<Button
						variant='primary'
						size='lg'
						onClick={onDelete}
					>
						Munch
					</Button>
					<Badge className='float-end'>Quantity: 2</Badge>
				</Card.Body>
			</Card>
		</Col>
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
}

export default Item
