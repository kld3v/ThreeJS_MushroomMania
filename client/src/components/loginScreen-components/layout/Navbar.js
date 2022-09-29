import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth, logoutPlayer } from '../../../context/auth/AuthState'
import image from './mushroom.png'
// import sound from '../../../RunAmok.mp3'

import { Row, Col, Container, Navbar, Stack, Button } from 'react-bootstrap'

const NavbarComponent = ({ title }) => {
	const [authState, authDispatch] = useAuth()

	const { isAuthenticated } = authState
	// const playSound = new Audio(sound)
	// const playFunMusic = () => {
	// 	console.log('clicked', music)
	// 	music ? setMusic(false) : setMusic(true)
	// }
	const [music, setMusic] = useState(true)

	const onLogout = () => {
		logoutPlayer(authDispatch)
	}

	useEffect(() => {}, [])

	const [menu, setMenu] = useState(true)

	const changeMenu = () => {
		setMenu(!menu)
	}
	const menuIcon = (
		<Fragment>
			<img
				src={image}
				alt='Mushroom Menu Icon'
				href='#open-modal'
				onClick={changeMenu}
				style={{ cursor: 'pointer', width: '100px', height: '100px' }}
			/>
		</Fragment>
	)
	const authLinks = (
		<Container>
			<Stack gap={3} className='col-sm-5 mx-auto mt-3'>
				<Button disabled>Mushroom Book</Button>
				<Button disabled>Stats</Button>
				<Button>Sound {music ? 'off' : 'on'}</Button>
				<Button href='#!' onClick={onLogout}>
					Logout
				</Button>
				<Button href='#!' onClick={changeMenu}>
					Close
				</Button>
			</Stack>
		</Container>
	)

	const guestLinks = (
		<Navbar.Text>
			<Row>
				<Col>
					<Link to='/login'>Login</Link>
				</Col>
				<Col>
					<Link to='/register'>Register</Link>
				</Col>
				<Col>
					<Link to='/about'>About</Link>
				</Col>
			</Row>
		</Navbar.Text>
	)

	return (
		<Navbar
			bg=''
			variant='dark'
			style={{ border: 'none' }}
			collapseOnSelect
			expand='lg'
		>
			<Container>
				<Navbar.Brand href='#!'>
					<h1>{title}</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
					{isAuthenticated ? (menu ? menuIcon : authLinks) : guestLinks}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
	title: '',
}

export default NavbarComponent
