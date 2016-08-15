/* *
	 * webLogo init
	 */

var logoSource;
	
function webLogoInit() {
	logoSource = document.getElementById( "edt_logoSource" );
}

/* *
	 * Clean up the editor to start a new Logo script
	 */

function newScript() {
	logoSource.value = "";
	
	clearCanvas();
}

/* *
	 * Load a Logo script file into the editor
	 */

function loadScript() {
	logoSource.value = "FORWARD 50";
	
	clearCanvas();
}

/* *
	 * Run the Logo script from the editor
	 */

function runScript() {
	showTurtle();
}
