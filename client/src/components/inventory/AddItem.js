import React, { useState } from 'react'
import { useItem, addItem } from '../../context/Item/ItemState'

const AddItem = () => {
	const [itemState, itemDispatch] = useItem()

	const [item, setItem] = useState({
		name: '',
		latin: '',
		description: '',
		psychadelic: '',
	})

	const { name, latin, description, psychadelic } = item

	const onChange = (e) =>
		setItem({
			...item,
			[e.target.name]: e.target.value,
		})

	const onSubmit = (e) => {
		e.preventDefault()
		addItem(itemDispatch, item)
		setItem({
			name: '',
			latin: '',
			description: '',
			psychadelic: '',
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
				name='latin'
				placeholder='latin'
				value={latin}
				onChange={onChange}
			/>
			<input
				type='text'
				name='description'
				value={description}
				placeholder='description'
				onChange={onChange}
			/>
			<input
				type='text'
				name='psychadelic'
				placeholder='psychadelic'
				value={psychadelic}
				onChange={onChange}
			/>
			<input type='submit' value='Add Item' className='btn btn-primary btn-sm' />
		</form>
	)
}

export default AddItem
