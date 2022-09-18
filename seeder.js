const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')

const config = require('config')
const db = config.get('mongoURI')

// load models
const Item = require('./models/Item')

// connect to DB
mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// read JSON files
const shrooms = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/mushrooms.json`, 'utf-8')
)

// import into db
const importData = async () => {
	try {
		await Item.create(shrooms)
		console.log('Data imported...'.green.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

// Delete Data
const deleteData = async () => {
	try {
		await Item.deleteMany()
		console.log('Data destroyed...'.red.inverse)
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

if (process.argv[2] === '-i') {
	importData()
} else if (process.argv[2] === '-d') {
	deleteData()
}
