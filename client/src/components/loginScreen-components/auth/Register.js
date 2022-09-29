import React, { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import AlertContext from '../../../context/alert/alertContext'
import { useAuth, register, clearErrors } from '../../../context/auth/AuthState'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Register = (props) => {
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext

	const [authState, authDispatch] = useAuth()
	const { error, isAuthenticated } = authState

	useEffect(() => {
		if (error === 'Email already exists') {
			setAlert(error, 'danger')
			clearErrors(authDispatch)
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history, setAlert, authDispatch])

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
			register(authDispatch, {
				username,
				email,
				password,
			})
		}
	}

	let span = 6
	let offset = 3

	if (isAuthenticated) return <Navigate to='/' />

	return (
		<Form>
			<Container>
				<Row>
					<Col className='text-center' md={{ span, offset }}>
						<Form.Group className='mb-3' controlId='formBasicUsername'>
							<Form.Label className='inputTitle'>Username</Form.Label>
							<Form.Control
								type='text'
								name='username'
								placeholder='eg Parzival, Kaiba, BobaFett'
								value={username}
								onChange={onChange}
							/>
							<Form.Text className='text-muted'></Form.Text>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='text-center' md={{ span, offset }}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='inputTitle'>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Mushroom@pie.yum'
								value={email}
								name='email'
								onChange={onChange}
							/>
							<Form.Text style={{ color: 'white' }}>
								We'll never share your email with anyone else. 😊
							</Form.Text>
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col className='text-center' md={{ span, offset }}>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								value={password}
								onChange={onChange}
								required
								placeholder='min 6 characters pls'
								minLength='6'
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='text-center' md={{ span, offset }}>
						<Form.Group className='mb-3' controlId='formBasicPassword2'>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								name='password2'
								value={password2}
								onChange={onChange}
								required
								minLength='6'
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='text-center' md={{ span: 6, offset: 3 }}>
						<Button
							type='button'
							className='btn btn-outline-success'
							size='lg'
							onClick={onSubmit}
						>
							Register
						</Button>
					</Col>
				</Row>
			</Container>
		</Form>
	)
}

export default Register
