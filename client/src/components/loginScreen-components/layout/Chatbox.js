const Chatbox = () => {
	return (
		<div className='form-containerChat'>
			<ul id='messages' />
			<form id='form' action=''>
				<input id='input' autocomplete='off' />
				<button>Send</button>
			</form>
		</div>
	)
}

export default Chatbox
