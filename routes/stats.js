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
	try {
		const newCharacter = new Stats({
			level: 0,
			health: 100,
			energy: 100,
			experience: 0,
			history: [],
			player: req.player.id,
		})
		const stats = await newCharacter.save()
		res.json(stats)
	} catch (error) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

// @route       POST api/stats
// @desc        Add a history record of points scored and on what map.
// @access      private
router.post('/history', auth, async (req, res) => {
	try {
		let stats = await Stats.find({ player: req.player.id })

		const newHistoryEntry = {
			points: req.body.points,
			map: req.body.map,
			time: req.body.time,
		}

		stats[0].history.unshift(newHistoryEntry)

		await stats[0].save()
		res.status(201).json(stats)
	} catch (error) {
		console.log(error)
		res.status(500).send('History update failure')
	}
})

// @route       PUT api/stats
// @desc        update a value, increase or decrease health etc.
// @access      private
router.put('/', auth, async (req, res) => {
	// extract the equipped value from the client req object

	try {
		let stats = await Stats.find({ player: req.player.id })

		if (!stats) return res.status(404).json({ msg: 'stats not found' })

		const { player, _id, experience } = stats[0]

		// make sure player can only edit their own stats
		if (player.toString() !== req.player.id) {
			return res.status(401).json({ msg: 'not authorised' })
		}

		let xp = {
			experience: experience + 10,
		}
		if (req.body.increaseXP) {
			stats = await Stats.findByIdAndUpdate(_id, xp, {
				new: true,
				runValidators: true,
			})
			return res.status(200).json(stats)
		} else {
			stats = await Stats.findByIdAndUpdate(_id, req.body, {
				new: true,
				runValidators: true,
			})

			res.status(200).json(stats)
		}
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error ')
	}
})

module.exports = router
