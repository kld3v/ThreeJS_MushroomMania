const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const Player = require('../models/Player.js')

// @route       POST api/players
// @desc        register a player
// @access      public
router.post(
	'/',
	[
		check('username', 'name is required').not().isEmpty(),
		check('email', 'please include a valid email you maggot scum').isEmail(),
		check('password', 'please enter password with 6 or more characters').isLength(
			{ min: 6 }
		),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { username, email, password } = req.body

		try {
			let player = await Player.findOne({ username })
			let playerEmail = await Player.findOne({ email })
			if (player) {
				return res.status(400).json({ msg: 'Username taken' })
			} else if (playerEmail) {
				return res.status(400).json({ msg: 'Email already exists you maggot scum' })
			}

			player = new Player({
				username,
				email,
				password,
			})

			// create a salt using bcrypt package
			const salt = await bcrypt.genSalt(10)
			// update the instance of Player above to set password to the salted hash.
			player.password = await bcrypt.hash(password, salt)
			// player.save returns a promise so wait for this to come back in
			await player.save()
			// create payload to give to client
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
