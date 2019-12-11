class KeyboardManager {
	static quickFill() {
		return KeyboardManager.keyStates[70] === true;
	}

	static areaSelect() {
		return KeyboardManager.keyStates[68] === true;
	}
}

KeyboardManager.keyStates = {};

$("html").keydown(function(event) {
	KeyboardManager.keyStates[event.which] = true;
});

$("html").keyup(function(event) {
	KeyboardManager.keyStates[event.which] = false;
});

$("html").mouseleave(function(event) {
	KeyboardManager.keyStates = {};
});

$("html").mouseenter(function(event) {
	KeyboardManager.keyStates = {};
});
