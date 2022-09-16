const mongoose = require('mongoose')

const StatsSchema = mongoose.Schema({
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'players',
	},
	level: {
		type: Number,
		required: true,
	},
	health: {
		type: Number,
	},
	energy: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('stats', StatsSchema)
