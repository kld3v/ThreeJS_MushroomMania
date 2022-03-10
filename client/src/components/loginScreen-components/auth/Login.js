import React, { useState } from 'react'

const Login = () => {
	const [player, setPlayer] = useState({
		name: '',
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
		console.log('login submit')
	}
	return (
		<div className='form-container'>
			<h1>
				{' '}
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'> Username</label>
					<input type='text' name='name' value={name} onChange={onChange} />
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
