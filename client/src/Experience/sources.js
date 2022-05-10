export default [
	{
		name: 'environmentMapTexture',
		type: 'cubeTexture',
		path: [
			'static/textures/environmentMap/px.png',
			'static/textures/environmentMap/nx.png',
			'static/textures/environmentMap/py.png',
			'static/textures/environmentMap/ny.png',
			'static/textures/environmentMap/pz.png',
			'static/textures/environmentMap/nz.png',
		],
	},
	{
		name: 'Greyfield',
		type: 'gltfModel',
		path: 'static/models/Greyfield/land.glb',
	},
	// characters
	{
		name: 'TestCharacter',
		type: 'FBXModel',
		path: 'static/assets/fbx/people/FireFighter.fbx',
	},
	{
		name: 'TestCharacterTexture',
		type: 'texture',
		path: 'static/assets/images/SimplePeople_FireFighter_Brown.png',
	},
	{
		name: 'PointingGesture',
		type: 'FBXModel',
		path: 'static/assets/fbx/anims/pointing.fbx',
	},
	{
		name: 'Running',
		type: 'FBXModel',
		path: 'static/assets/fbx/anims/Running.fbx',
	},
	{
		name: 'Turn',
		type: 'FBXModel',
		path: 'static/assets/fbx/anims/Turn.fbx',
	},
	{
		name: 'WalkingBackward',
		type: 'FBXModel',
		path: 'static/assets/fbx/anims/WalkingBackwards.fbx',
	},
	{
		name: 'Walking',
		type: 'FBXModel',
		path: 'static/assets/fbx/anims/Walking.fbx',
	},
	{
		name: 'FoxTest',
		type: 'gltfModel',
		path: 'static/models/Fox/glTF/fox.gltf',
	},
]
