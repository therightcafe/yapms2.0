var keyStates = {};

$("html").keydown(function(event) {
	keyStates[event.which] = true;
});

$("html").keyup(function(event) {
	keyStates[event.which] = false;

	if($('#candidate-name').is(':focus'))
		return;

	if($('#name').is(':focus'))
		return;

	switch(event.which) {
		//case 32:
		//togglePresentationMode();
		//	break;
		case 49:
			setMode('paintmove');
			break;
		case 50:
			setMode('paint');
			break;
		case 51:
			setMode('move');
			break;
		case 52:
			setMode('delete');
			break;
		case 53:
			setMode('ec');
			break;
		case 54:
			setMode('candidate');
			break;
	}
});

$("html").mouseleave(function(event) {
	keyStates = {};
});

$("html").mouseenter(function(event) {
	keyStates = {};
});
