import React, { useState, useContext } from 'react'
import ItemContext from '../../context/Item/itemContext'

const AddItem = () => {
	const itemContext = useContext(ItemContext)

	const [item, setItem] = useState({
		name: '',
		material: '',
		value: '',
		imagePath: '',
	})

	const { name, material, value, imagePath } = item

	const onChange = (e) =>
		setItem({
			...item,
			[e.target.name]: e.target.value,
		})

	const onSubmit = (e) => {
		e.preventDefault()
		itemContext.addItem(item)
		setItem({
			name: '',
			material: '',
			value: '',
			imagePath: '',
		})
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='name'
				placeholder='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='text'
				name='material'
				placeholder='material'
				value={material}
				onChange={onChange}
			/>
			<input
				type='text'
				name='value'
				value={value}
				placeholder='value'
				onChange={onChange}
			/>
			<input
				type='text'
				name='imagePath'
				placeholder='imagePath'
				value={imagePath}
				onChange={onChange}
			/>
			<input type='submit' value='Add Item' className='btn btn-primary btn-sm' />
		</form>
	)
}

export default AddItem
