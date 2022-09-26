import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth, logoutPlayer } from '../../../context/auth/AuthState'
import image from './mushroom.png'
// import sound from '../../../RunAmok.mp3'

const Navbar = ({ title }) => {
	const [authState, authDispatch] = useAuth()

	const { isAuthenticated } = authState
	// const playSound = new Audio(sound)
	// playSound.play()
	const onLogout = () => {
		logoutPlayer(authDispatch)
	}

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
				width='100'
				height='50'
				style={{ cursor: 'pointer' }}
			/>
		</Fragment>
	)
	const authLinks = (
		<Fragment>
			<div className='authMenu'>
				<li>Mushroom Book</li>
				<li>Stats</li>
				<li>
					<a href='#!' onClick={onLogout}>
						Logout
					</a>
					<a href='#!' onClick={changeMenu}>
						Close
					</a>
				</li>
				<li>Sound Off</li>
			</div>
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
		</Fragment>
	)

	return (
		<div className='navbar '>
			<h1>{title}</h1>
			<ul>{isAuthenticated ? (menu ? menuIcon : authLinks) : guestLinks}</ul>
		</div>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
	title: '',
}

export default Navbar
