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
		name: 'forest',
		type: 'gltfModel',
		path: 'static/models/forestMerged.glb',
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
		path: 'static/assets/fbx/idle.fbx',
	},
	// {
	// 	name: 'dance',
	// 	type: 'FBXModel',
	// 	path: 'static/assets/fbx/dance.fbx',
	// },
	// {
	// 	name: 'run',
	// 	type: 'FBXModel',
	// 	path: 'static/assets/fbx/run.fbx',
	// },
	// {
	// 	name: 'walk',
	// 	type: 'FBXModel',
	// 	path: 'static/assets/fbx/walk.fbx',
	// },
	// {
	// 	name: 'TestCharacterTexture',
	// 	type: 'texture',
	// 	path: 'static/assets/images/SimplePeople_FireFighter_Brown.png',
	// },
	// {
	// 	name: 'Walking',
	// 	type: 'FBXModel',
	// 	path: 'static/assets/fbx/anims/Walking.fbx',
	// },
]
