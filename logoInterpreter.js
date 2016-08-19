/* *
	 * Interpret a Logo script
	 */

function parseScript( _logoScript ) {
    if( _logoScript == "square" ) {
        //  draw a square
        clearCanvas();
        showTurtle();
        penDown();
    
        for( var i = 1; i <= 4; i++ ) {
            setTimeout( function() {
                turtleForward( 50 );
                turtleLeft( 90 );
            }, 500 );
        }
    } else if( _logoScript == "circle" ) {
        //  draw a circle
        clearCanvas();
        showTurtle();
        penDown();
    
        for( var i = 0; i <= 360; i++ ) {
            setTimeout( function() {
                turtleForward( 0.5 );
                turtleLeft( 1 );
            }, 500 );
        }
    }
}
