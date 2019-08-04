var keyStates = {};

$("html").keydown(function(event) {
	keyStates[event.which] = true;
});

$("html").keyup(function(event) {
	keyStates[event.which] = false;
/*
	if($('#candidate-name').is(':focus'))
		return;

	if($('#name').is(':focus'))
		return;

	if(event.which === 32) {
		togglePresentationMode();
	}
*/
});

$("html").mouseleave(function(event) {
	keyStates = {};
});

$("html").mouseenter(function(event) {
	keyStates = {};
});
