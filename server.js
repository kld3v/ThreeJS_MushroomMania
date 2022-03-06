const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

//init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send({ msg: 'welcome to the Eldia API' }))

//Define routes
app.use('/api/players', require('./routes/players'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/items', require('./routes/items'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on ${PORT}`))
