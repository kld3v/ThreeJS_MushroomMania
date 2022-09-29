import React from 'react'
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap'

const About = () => {
	return (
		<Container style={{ color: 'white' }}>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<h1>About</h1>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<p className='my-1'>3d Mern Stack App with Three.js</p>
					<p className='bg-dark p'>
						<strong>V.1.0.0</strong>
					</p>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<a href='https://www.instagram.com/kolyathedev/'>@kolyathedev</a>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<a href='https://www.instagram.com/kibblebig/'>@kibblebig</a>
				</Col>
			</Row>
		</Container>
	)
}

export default About
