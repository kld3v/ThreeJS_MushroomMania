import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>{title}</h1>
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
