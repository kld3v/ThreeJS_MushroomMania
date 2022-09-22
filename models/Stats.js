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
	experience: Number,
	history: [
		{
			points: Number,
			map: String,
			time: String,
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],

	date: {
		type: Date,
		default: Date.now,
	},
})

// Before updating, we can check to see if enough experience has been gained to level up
/// --> to take another look at...

// StatsSchema.pre('findOneAndUpdate', async function () {
// 	const docToUpdate = await this.model.findOne(this.getQuery())
// 	console.log(docToUpdate) // The document that `findOneAndUpdate()` will modify
// 	console.log(docToUpdate.level)
// 	let baseXP = 500
// 	let reqToLevel = baseXP * docToUpdate.level ** 2
// 	console.log(reqToLevel)
// 	if (docToUpdate.experience > reqToLevel) {
// 		docToUpdate.level = docToUpdate.level + 1
// 	}
// 	console.log(docToUpdate.level)
// })

module.exports = mongoose.model('stats', StatsSchema)
