const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Player = require('../models/Player.js')

// @route       GET api/auth
// @desc        get the player which has logged in
// @access      private
router.get('/', auth, async (req, res) => {
	try {
		// if the auth middleware shows a token, we will go to the database and find the player details whose match that id. return details except the password.
		const player = await Player.findById(req.player.id).select('-password')

		res.json(player)
	} catch (err) {
		res.status(500).send('server error')
	}
})

// @route       POST api/auth
// @desc        authenticate player and return token
// @access      private
router.post(
	'/',
	[
		check('email', 'please provide a valid email').isEmail(),
		check('password', 'password is required').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { email, password } = req.body

		try {
			let player = await Player.findOne({ email })

			if (!player) {
				return res.status(400).json({ msg: 'Invalid Credentials' })
			}

			// will return true or false depending on whether the passwords match
			const isMatch = await bcrypt.compare(password, player.password)

			if (!isMatch) {
				res.status(400).json({ msg: 'Invalid Credentials' })
			}

			const payload = {
				player: {
					id: player.id,
				},
			}

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 36000 },
				(err, token) => {
					if (err) {
						throw err
					}
					res.json({ token })
				}
			)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('server error')
		}
	}
)

module.exports = router
