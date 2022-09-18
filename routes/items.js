const express = require('express')
const auth = require('../middleware/auth.js')
const router = express.Router()
const Player = require('../models/Player.js')
const Item = require('../models/Item.js')

// @route       GET api/items
// @desc        get logged in items in inventory
// @access      private
router.get('/', auth, async (req, res) => {
	try {
		const inventory = await Item.find({ player: req.player.id }).sort({
			date: -1,
		})
		res.json(inventory)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('server error ')
	}
})

// @route       POST api/items
// @desc        add a new item (collect an item)
// @access      private
router.post('/', auth, async (req, res) => {
	const { name, description, psychadelic } = req.body

	try {
		const newItem = new Item({
			name,
			description,
			psychadelic,
			player: req.player.id,
		})

		const item = await newItem.save()

		res.json(item)
	} catch (error) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

// @route       PUT api/items/:id
// @desc        edit and item so that it's boolean use is set to true false. This can be used later to tell 3 whether or not to equip/adorn the item or not.
// @access      private
router.put('/:id', auth, async (req, res) => {
	// extract the equipped value from the client req object
	const { equipped } = req.body

	// build item object
	const equipField = {}
	if (equipped) {
		equipField.equipped = equipped
	} else if (!equipped) {
		equipField.equipped = false
	}

	try {
		let item = await Item.findById(req.params.id)
		if (!item) return res.status(404).json({ msg: 'Item not found' })

		// make sure player can only edit their own items
		if (item.player.toString() !== req.player.id) {
			return res.status(401).json({ msg: 'not authorised' })
		}

		item = await Item.findByIdAndUpdate(req.params.id, { $set: equipField })

		res.json(item)
	} catch (err) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

// @route       DELETE api/items
// @desc        throw away an item
// @access      private
router.delete('/:id', auth, async (req, res) => {
	try {
		let item = await Item.findById(req.params.id)
		if (!item) return res.status(404).json({ msg: 'Item not found' })

		// make sure player can only edit their own items
		if (item.player.toString() !== req.player.id) {
			return res.status(401).json({ msg: 'not authorised' })
		}

		await Item.findByIdAndRemove(req.params.id)

		res.json({ msg: 'Mushroom deleted' })
	} catch (err) {
		console.error(error.message)
		res.status(500).send('Server Error ')
	}
})

module.exports = router
