const express = require('express')
const auth = require('../middleware/auth.js')
const router = express.Router()
const Stats = require('../models/Stats.js')

// @route       GET api/stats
// @desc        get logged in player's stats
// @access      private
router.get('/', auth, async (req, res) => {
	try {
		const stats = await Stats.find({ player: req.player.id })
		res.json(stats)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('server error ')
	}
})

// @route       POST api/stats
// @desc        Register a new player's stats on register.
// @access      private
router.post('/', auth, async (req, res) => {
	const { level, health, energy, experience } = req.body

	try {
		const newCharacter = new Stats({
			level,
			health,
			energy,
			experience,
			player: req.player.id,
		})
		const stats = await newCharacter.save()
		res.json(stats)
	} catch (error) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

// @route       PUT api/stats
// @desc        update a value, increase or decrease health etc.
// @access      private
router.put('/:id', auth, async (req, res) => {
	// extract the equipped value from the client req object

	try {
		let stats = await Stats.findById(req.params.id)

		if (!stats) return res.status(404).json({ msg: 'stats not found' })

		// make sure player can only edit their own stats
		if (stats.player.toString() !== req.player.id) {
			return res.status(401).json({ msg: 'not authorised' })
		}

		stats = await Stats.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		})

		res.status(200).json(stats)
	} catch (err) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

module.exports = router
