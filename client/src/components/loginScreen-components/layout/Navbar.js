import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth/authContext'
import ItemContext from '../../../context/Item/itemContext'

const Navbar = ({ title }) => {
	const authContext = useContext(AuthContext)
	const { isAuthenticated, player, logoutPlayer } = authContext

	const itemContext = useContext(ItemContext)
	const { clearItems } = itemContext

	const onLogout = () => {
		logoutPlayer()
		clearItems()
	}
	const authLinks = (
		<Fragment>
			<li>Hello {player && player.username}</li>
			<li>
				<a href='#!' onClick={onLogout}>
					Logout
				</a>
			</li>
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
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
