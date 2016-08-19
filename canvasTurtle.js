/* *
	 * canvas turtle initialization
	 */

var turtleCanvas;
var	canvasContext;
var	turtleX;
var	turtleY;
var	turtleAngle;
var	turtleRadius;
var	turtleShown;
var	turtleRectX1;
var	turtleRectY1;
var	turtleRectX2;
var	turtleRectY2;
var	turtleRectImg;
var penLowered;
var penColour;

function canvasTurtleInit() {
	turtleCanvas = document.getElementById( "canvasTurtle" );
	canvasContext = turtleCanvas.getContext( "2d" );
	
	turtleX = turtleCanvas.width / 2;
	turtleY = turtleCanvas.height / 2;
	turtleAngle = 0;
	turtleRadius = 10;
	turtleShown = false;
	penLowered = false;
	penColour = "blue";
}

/* *
	 * clear the canvas
	 */

function clearCanvas() {
	canvasContext.fillStyle = "white";
	canvasContext.fillRect( 0, 0, turtleCanvas.width, turtleCanvas.height );
	
	if( turtleShown == true ) {
		turtleShown = false;
		showTurtle();
	}
}

/* *
	 * Show turtle
	 */

function showTurtle() {
	if( true == turtleShown ) {
		return;
	}
	
	//	evaluate turtle coordinates
	var	p1x = turtleX + turtleRadius * Math.cos( turtleAngle );
	var	p1y = turtleY + turtleRadius * Math.sin( turtleAngle );
	var	p2x = turtleX - turtleRadius * Math.cos( Math.PI / 3 - turtleAngle );
	var	p2y = turtleY + turtleRadius * Math.sin( Math.PI / 3 - turtleAngle );
	var	p3x = turtleX - turtleRadius * Math.cos( Math.PI / 3 + turtleAngle );
	var	p3y = turtleY - turtleRadius * Math.sin( Math.PI / 3 + turtleAngle );
	
	//	save the image under the turtle rectangle
	turtleRectX1 = turtleX - turtleRadius - 1;
	turtleRectY1 = turtleY - turtleRadius - 1;
	turtleRectX2 = turtleX + turtleRadius + 1;
	turtleRectY2 = turtleY + turtleRadius + 1;
		
	turtleRectImg = canvasContext.getImageData( turtleRectX1, turtleRectY1, turtleRectX2 - turtleRectX1
			, turtleRectY2 - turtleRectY1 );

	//	draw the turtle triangle
	canvasContext.strokeStyle = "red";
	
	canvasContext.beginPath();
	canvasContext.moveTo( p1x, p1y );
	canvasContext.lineTo( p2x, p2y );
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.moveTo( p2x, p2y );
	canvasContext.lineTo( p3x, p3y );
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.moveTo( p3x, p3y );
	canvasContext.lineTo( p1x, p1y );
	canvasContext.stroke();
	
	turtleShown = true;
}

/* *
	 * hide turtle
	 */

function hideTurtle() {
	if( false == turtleShown ) {
		return;
	}
	
	//	restore the image under the turtle rectangle
	canvasContext.putImageData( turtleRectImg, turtleRectX1, turtleRectY1 );
	
	turtleShown = false;
}
	
/* *
	 * put pen down
	 */

function penDown() {
	penLowered = true;
}

/* *
	 * put pen up
	 */

function penUp() {
	penLowered = false;
}

/* *
	 * Turtle Forward
	 */

function turtleForward( _length ) {
	var turtleShownAux = turtleShown;
	
	if( true == turtleShownAux ) {
		hideTurtle();
	}
	
	//	if pen is down, set current position to draw a line from
	if( true == penLowered ) {
		canvasContext.strokeStyle = penColour;
	
		canvasContext.beginPath();
		canvasContext.moveTo( turtleX, turtleY );
	}
	
	//	evaluate new turtle coordinates
	turtleX += _length * Math.cos( turtleAngle );
	turtleY += _length * Math.sin( turtleAngle );
	
	//	if pen is down, set new position to draw a line to
	if( true == penLowered ) {
		canvasContext.lineTo( turtleX, turtleY );
		canvasContext.stroke();
	}
	
	if( true == turtleShownAux ) {
		showTurtle();
	}
}

/* *
	 * Turtle Left
	 */

function turtleLeft( _angle ) {
	var turtleShownAux = turtleShown;
	
	if( true == turtleShownAux ) {
		hideTurtle();
	}
	
	//	evaluate new turtle angle
	turtleAngle += _angle * ( Math.PI / 180 );
	while( turtleAngle > 2 * Math.PI ) {
		turtleAngle -= 2 * Math.PI;
	}
	
	if( true == turtleShownAux ) {
		showTurtle();
	}
}

/* *
	 * Turtle Right
	 */

function turtleRight( _angle ) {
	var turtleShownAux = turtleShown;
	
	if( true == turtleShownAux ) {
		hideTurtle();
	}
	
	//	evaluate new turtle angle
	turtleAngle -= _angle * ( Math.PI / 180 );
	while( turtleAngle < 0 ) {
		turtleAngle += 2 * Math.PI;
	}
	
	if( true == turtleShownAux ) {
		showTurtle();
	}
}

/* *
	 * Write string
	 */

function writeText() {
	canvasContext.font = "30px Arial";
	canvasContext.fillText( "running ...", 10, 50 );
}
