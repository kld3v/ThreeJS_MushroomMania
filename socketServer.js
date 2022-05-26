// socket playaround

const express = require('express')
const appSocket = express()
const http = require('http')
const server = http.createServer(appSocket)
const { Server } = require('socket.io')
const io = new Server(server)

appSocket.use(express.static('client/build'))

appSocket.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

io.on('connection', (socket) => {
	console.log('user connected')
})

server.listen(3001, () => {
	console.log('listening on 3001')
})
