import React from 'react'

const About = () => {
	console.log('about!')
	return (
		<div>
			<h1>about</h1>
			<p className='my-1'>3d world full stack MERN app. Made with three.js</p>
			<p className='bg-dark p'>
				<strong>V.1.0.0</strong>
			</p>
			<p className='my-1'>
				<a href='https://twitter.com/eth_nikodev'>@eth_nikodev</a> <br />
				<a href='https://www.instagram.com/kibblebig/'>@kibblebig</a>
			</p>
		</div>
	)
}

export default About
