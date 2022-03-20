import React from 'react'
// import Inventory from '../../inventory/Inventory.js'
import Experience from '../../../Experience/Experience.js'
import AuthContext from '../../../context/auth/authContext.js'
import { Navigate } from 'react-router-dom'

const Home = () => {
	if (!isAuthenticated) return <Navigate to='/login' />

	const experience = new Experience(document.querySelector('canvas.webgl'))
	return <div></div>
}

export default Home
