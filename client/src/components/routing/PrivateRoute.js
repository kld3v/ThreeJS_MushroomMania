import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import { Navigate } from 'react-router-dom'
import Spinner from '../loginScreen-components/layout/Spinner'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext)
	const { isAuthenticated, loading } = authContext

	// if (loading) return <Spinner />

	if (isAuthenticated) return <Component />

	return <Navigate to='/login' />
}

export default PrivateRoute
