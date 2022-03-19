import React, { Fragment, useContext, useEffect } from 'react'
import Box from './Box'
import AuthContext from '../../context/auth/authContext'

const Experience = () => {
	const authContext = useContext(AuthContext)

	// authContext.loadPlayer()

	// useEffect(() => {
	// 	authContext.loadPlayer()

	// }, [])

	return (
		<Fragment>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Fragment>
	)
}

export default Experience
