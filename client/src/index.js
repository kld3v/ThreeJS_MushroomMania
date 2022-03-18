import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'

import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('canvas.webgl'))

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

console.log('loaded')
