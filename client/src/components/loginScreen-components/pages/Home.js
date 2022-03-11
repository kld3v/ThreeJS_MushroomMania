import React, { useContext, useEffect } from 'react'
import Inventory from '../../inventory/Inventory.js'
import AuthContext from '../../../context/auth/authContext'
const Home = () => {
	const authContext = useContext(AuthContext)

	useEffect(() => {
		authContext.loadPlayer()

		// eslint-disable-next-line
	}, [])

	return (
		<div className='grid-4'>
			<div></div>
			<div></div>
			<div></div>
			<div>
				<Inventory />
			</div>
		</div>
	)
}

export default Home
