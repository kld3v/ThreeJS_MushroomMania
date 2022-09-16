export default [
	{
		name: 'environmentMapTexture',
		type: 'cubeTexture',
		path: [
			'static/textures/environmentMap/px.jpg',
			'static/textures/environmentMap/nx.jpg',
			'static/textures/environmentMap/py.jpg',
			'static/textures/environmentMap/ny.jpg',
			'static/textures/environmentMap/pz.jpg',
			'static/textures/environmentMap/nz.jpg',
		],
	},
	{
		name: 'mareFolorum',
		type: 'gltfModel',
		path: 'static/models/mareFolorum.glb',
	},

	{
		name: 'bakedTexture',
		type: 'texture',
		path: 'static/models/BAKED.jpg',
	},

	// character
	{
		name: 'Mutant',
		type: 'FBXModel',
		path: 'static/assets/fbx/Mutant.fbx',
	},
	{
		name: 'idle',
		type: 'FBXModel',
		path: 'static/assets/fbx/idle74noskin.fbx',
	},
	// {
	// 	name: 'dance',
	// 	type: 'FBXModel',
	// 	path: 'static/assets/fbx/dance.fbx',
	// },
	{
		name: 'run',
		type: 'FBXModel',
		path: 'static/assets/fbx/run.fbx',
	},
	{
		name: 'walk',
		type: 'FBXModel',
		path: 'static/assets/fbx/walk.fbx',
	},
	{
		name: 'attack',
		type: 'FBXModel',
		path: 'static/assets/fbx/attack.fbx',
	},

	// ITEMS

	{
		name: 'axe',
		type: 'gltfModel',
		path: 'static/models/AXEBLENDER.glb',
	},
	{
		name: 'trunk',
		type: 'texture',
		path: 'static/models/HD_Trunk.jpg',
	},
]
