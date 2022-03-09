import React, { Fragment } from 'react'
import Box from './Box'
const Experience = () => {
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
