import Navbar from './components/loginScreen-components/layout/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'
import Home from './components/loginScreen-components/pages/Home.js'
import About from './components/loginScreen-components/pages/About.js'
import { Canvas } from '@react-three/fiber'
import Experience from './components/game-components/Experience.js'

import ItemState from './context/Item/ItemState'
const App = () => {
	return (
		<ItemState>
			<Router>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route
								path='/experience'
								element={
									<Canvas>
										<Experience />
									</Canvas>
								}
							/>
						</Routes>
					</div>
				</Fragment>
			</Router>
		</ItemState>
	)
}

export default App
