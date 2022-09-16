const express = require('express')
const auth = require('../middleware/auth.js')
const router = express.Router()
const Stats = require('../models/Stats.js')

// @route       GET api/stats
// @desc        get logged in items in inventory
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
	const { level, health, energy } = req.body

	try {
		const newCharacter = new Stats({
			level,
			health,
			energy,
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
// @desc        edit and item so that it's boolean use is set to true false. This can be used later to tell 3 whether or not to equip/adorn the item or not.

// @access      private
router.put('/', auth, async (req, res) => {
	// extract the equipped value from the client req object
	const { level, health, energy } = req.body

	//

	try {
		let stats = await Stats.findById(req.player.id)
		if (!item) return res.status(404).json({ msg: 'stats not found' })

		// make sure player can only edit their own items
		if (item.player.toString() !== req.player.id) {
			return res.status(401).json({ msg: 'not authorised' })
		}

		stats = await Stats.findByIdAndUpdate(req.stats.id, {
			level: level,
			health: health,
			energy: energy,
		})

		res.json(stats)
	} catch (err) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

module.exports = router
