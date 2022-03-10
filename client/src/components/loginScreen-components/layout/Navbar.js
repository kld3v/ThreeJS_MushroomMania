import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>{title}</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</div>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
	title: 'Eldia',
}

export default Navbar
