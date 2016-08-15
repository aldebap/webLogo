/* *
	 * canvas turtle initialization
	 */

var turtleCanvas;
var	canvasContext;
var	turtleX;
var	turtleY;
var	turtleAngle;
var	turtleRadius;

function canvasTurtleInit() {
	turtleCanvas = document.getElementById( "canvasTurtle" );
	canvasContext = turtleCanvas.getContext( "2d" );
	
	turtleX = turtleCanvas.width / 2;
	turtleY = turtleCanvas.height / 2;
	turtleAngle = 0;
	turtleRadius = 10;
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
	var	p1x = turtleX + turtleRadius * Math.cos( turtleAngle );
	var	p1y = turtleY + turtleRadius * Math.sin( turtleAngle );
	var	p2x = turtleX - turtleRadius * Math.cos( Math.PI() / 3 - turtleAngle );
	var	p2y = turtleY + turtleRadius * Math.sin( Math.PI() / 3 - turtleAngle );
	var	p3x = turtleX - turtleRadius * Math.cos( Math.PI() / 6 + turtleAngle );
	var	p3y = turtleY - turtleRadius * Math.sin( Math.PI() / 6 + turtleAngle );
	
	canvasContext.fillStyle( "blue" );
	
	canvasContext.moveTo( p1x, p1y );
	canvasContext.lineTo( p2x, p2y );
	canvasContext.stroke();
	
	canvasContext.moveTo( p2x, p2y );
	canvasContext.lineTo( p3x, p3y );
	canvasContext.stroke();
	
	canvasContext.moveTo( p3x, p3y );
	canvasContext.lineTo( p1x, p1y );
	canvasContext.stroke();
}

/* *
	 * clear the canvas
	 */

function clearCanvas() {
	canvasContext.fillStyle = "#FFFFFF";
	canvasContext.fillRect( 0, 0, turtleCanvas.width, turtleCanvas.height );
}

/* *
	 * Turtle Forward
	 */

function turtleForward() {
}

/* *
	 * Write string
	 */

function writeText() {
	canvasContext.font = "30px Arial";
	canvasContext.fillText( "running ...", 10, 50 );
}
