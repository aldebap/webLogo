/* *
	 * webLogo init
	 */

function webLogoInit() {
}

/* *
	 * Clean up the editor to start a new Logo script
	 */

function newScript() {
	var logoSource = document.getElementById( "edt_logoSource" );

	logoSource.value = "";
	
	canvasContext.fillStyle = "#FFFFFF";
	canvasContext.fillRect( 0, 0, turtleCanvas.width, turtleCanvas.height );
}

/* *
	 * Load a Logo script file into the editor
	 */

function loadScript() {
	var logoSource = document.getElementById( "edt_logoSource" );
	var turtleCanvas = document.getElementById( "canvasTurtle" );
	var	canvasContext = turtleCanvas.getContext( "2d" );

	logoSource.value = "FORWARD 50";
	
	canvasContext.fillStyle = "#FFFFFF";
	canvasContext.fillRect( 0, 0, turtleCanvas.width, turtleCanvas.height );
}

/* *
	 * Run the Logo script from the editor
	 */

function runScript() {
	var logoSource = document.getElementById( "edt_logoSource" );
	var turtleCanvas = document.getElementById( "canvasTurtle" );
	var	canvasContext = turtleCanvas.getContext( "2d" );
	
	canvasContext.font = "30px Arial";
	canvasContext.fillText( "running ..." + logoSource.value, 10, 50 );
}
