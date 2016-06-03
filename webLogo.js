/* *
	 * Clean up the editor to start a new Logo script
	 */

function newScript() {
	var console = document.getElementById( 'console' );

	console.innerHTML = "<br />";
}

/* *
	 * Load a Logo script file into the editor
	 */

function loadScript() {
	var console = document.getElementById( 'console' );

	console.innerHTML = "FORWARD 50<br />";
}

/* *
	 * Run the Logo script file from the editor
	 */

function runScript() {
	var console = document.getElementById( 'console' );

	console.innerHTML = "FORWARD 50<br />";
	console.innerHTML += "running ...<br />";
}
