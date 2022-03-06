const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
	// get token from header
	const token = req.header('x-auth-token')

	// check if not token
	if (!token) {
		return res.status(401).json({ msg: ' no token, auth denied' })
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'))

		req.player = decoded.player
		next()
	} catch (err) {
		res.status(401).json({ msg: 'unauthorised access, token not valid ' })
	}
}
