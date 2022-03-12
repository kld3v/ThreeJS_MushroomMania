import React, { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import AlertContext from '../../../context/alert/alertContext'
import AuthContext from '../../../context/auth/authContext'

const Register = (props) => {
	const alertContext = useContext(AlertContext)
	const authContext = useContext(AuthContext)
	const { setAlert } = alertContext
	const { register, error, clearErrors, isAuthenticated } = authContext

	useEffect(() => {
		if (error === 'Email already exists') {
			setAlert(error, 'danger')
			clearErrors()
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	const [player, setPlayer] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	})

	const { username, email, password, password2 } = player

	const onChange = (e) => {
		setPlayer({
			...player,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (username === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger')
		} else if (password !== password2) {
			setAlert('Paswords do not match', 'danger')
		} else {
			register({
				username,
				email,
				password,
			})
		}
	}

	if (isAuthenticated) return <Navigate to='/' />

	// eventually I will want it to take us straight to experience, but some reason I cannot access AuthContext in experience to run loadPlayer, meaning if the user refreshes the page it doesn't keep them logged in. A bug to fix.
	// if (isAuthenticated) return <Navigate to='/experience' />

	return (
		<div className='form-container'>
			<h1>
				{' '}
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='username'> Username</label>
					<input type='text' name='username' value={username} onChange={onChange} />
					<label htmlFor='email'> Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
					<label htmlFor='password'> Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
						minLength='6'
					/>
					<label htmlFor='password2'> Confirm Password</label>
					<input
						type='password'
						name='password2'
						value={password2}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	)
}

export default Register
