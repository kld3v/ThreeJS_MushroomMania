import FiniteStateMachine from './FiniteStateMachine'
import IdleState from './IdleState'
export default class CharacterFSM extends FiniteStateMachine {
	constructor(proxy) {
		super()
		this._proxy = proxy
		this._Init()
	}

	_Init() {
		this._AddState('idle', IdleState)
		console.log(this._states)
		// this._AddState('walk', WalkState)
		// this._AddState('run', RunState)
		// this._AddState('dance', DanceState)
	}
}
