import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'

const canvas = document.createElement('canvas')
canvas.classList.add('webgl')
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
