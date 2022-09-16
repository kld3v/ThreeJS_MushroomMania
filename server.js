const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const app = express()

// Connect Database
connectDB()

//init middleware
app.use(express.json({ extended: false }))

//Define routes
app.use('/api/players', require('./routes/players'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/items', require('./routes/items'))
app.use('/api/stats', require('./routes/stats'))

// serve static assets in production

app.use(express.static('client/build'))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on ${PORT}`))
