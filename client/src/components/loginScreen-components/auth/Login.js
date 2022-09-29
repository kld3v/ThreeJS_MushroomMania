import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import { Navigate } from 'react-router-dom'
import {
	useAuth,
	clearErrors,
	loginPlayer,
} from '../../../context/auth/AuthState'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Login = () => {
	const alertContext = useContext(AlertContext)
	const { setAlert } = alertContext

	const [authState, authDispatch] = useAuth()
	const { error, isAuthenticated } = authState

	useEffect(() => {
		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger')
			clearErrors(authDispatch)
		}
	}, [error, setAlert, authDispatch])

	const [player, setPlayer] = useState({
		email: '',
		password: '',
	})

	const { email, password } = player

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
			loginPlayer(authDispatch, {
				email,
				password,
			})
		}
	}

	if (isAuthenticated) return <Navigate to='/' />

	return (
		<Form>
			<Container>
				<Row>
					<Col className='text-center' md={{ span: 6, offset: 3 }}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='inputTitle'>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								name='email'
								onChange={onChange}
							/>
							<Form.Text className='text-muted'></Form.Text>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='text-center' md={{ span: 6, offset: 3 }}>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								as='input'
								type='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={onChange}
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
							Log in
						</Button>
					</Col>
				</Row>
			</Container>
		</Form>
	)
}

export default Login
