/* *
	 * Interpret a Logo script
	 */

/*
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
*/

function parseScript(_logoScript) {
    //  const userAction = async () => {
    const response = await fetch('http://localhost:8000/logoparser/', {
        method: 'POST',
        body: _logoScript,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const myResponse = await response.json(); //extract JSON from the http response
    // do something with myJson
}