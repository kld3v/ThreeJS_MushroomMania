import Navbar from './loginScreen-components/layout/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import Home from './loginScreen-components/pages/Home.js'
import About from './loginScreen-components/pages/About.js'
const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</div>
			</Fragment>
		</Router>
	)
}

export default App
