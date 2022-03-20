import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext'
import AlertContext from '../../../context/alert/alertContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext
	const { loginPlayer, error, clearErrors, isAuthenticated } = authContext

	useEffect(() => {
		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger')
			clearErrors()
		}
		// eslint-disable-next-line
	}, [error, setAlert, isAuthenticated])

	const [player, setPlayer] = useState({
		email: '',
		password: '',
	})

	const { name, email, password } = player

	const onChange = (e) => {
		setPlayer({
			...player,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (email === '' || password === '') {
			setAlert('Please enter all fields', 'danger')
		} else {
			loginPlayer({
				email,
				password,
			})
		}
	}
	// eventually I will want it to take us straight to experience, but some reason I cannot access AuthContext in experience to run loadPlayer, meaning if the user refreshes the page it doesn't keep them logged in. A bug to fix.

	// if (isAuthenticated) return <Navigate to='/experience' />

	// taking us to the home page for now to sort out logout function.
	if (isAuthenticated) return <Navigate to='/' />

	return (
		<div className='form-container'>
			<h1>
				{' '}
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'> Email</label>
					<input type='email' name='email' value={email} onChange={onChange} />
					<label htmlFor='password'> Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<input type='submit' value='Login' className='btn btn-primary btn-block' />
			</form>
		</div>
	)
}

export default Login
