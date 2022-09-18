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
	latin: String,

	description: {
		type: String,
	},
	psychadelic: Boolean,

	dateCollected: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('item', ItemSchema)
