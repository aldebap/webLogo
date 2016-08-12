/* *
	 * canvas turtle initialization
	 */

var turtleCanvas;
var	canvasContext;
var	turtleX;
var	turtleY;
var	turtleAngle;

function canvasTurtleInit() {
	turtleCanvas = document.getElementById( "canvasTurtle" );
	canvasContext = turtleCanvas.getContext( "2d" );
	
	turtleX = turtleCanvas.width / 2;
	turtleY = turtleCanvas.height / 2;
	turtleAngle = 0;
}

/* *
	 * clear the canvas
	 */

function clearCanvas() {
	canvasContext.fillStyle = "#FFFFFF";
	canvasContext.fillRect( 0, 0, turtleCanvas.width, turtleCanvas.height );
}

/* *
	 * Show turtle
	 */

function showTurtle() {
}

/* *
	 * Turtle Forward
	 */

function turtleForward() {
}
