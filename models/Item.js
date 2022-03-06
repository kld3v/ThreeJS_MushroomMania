const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'players',
	},
	name: {
		type: String,
		required: true,
	},
	material: {
		type: String,
	},
	value: {
		type: String,
	},
	equipped: {
		type: Boolean,
		default: false,
	},
	dateCollected: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('item', ItemSchema)
