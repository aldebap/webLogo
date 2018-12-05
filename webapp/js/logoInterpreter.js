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

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "http://localhost:8000/logoparser/", true);
    //    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    //    xmlhttp.onload = () => {
    //        console.log("object program: \"" + this.responseText + "\"");
    //    }
    xmlhttp.onreadystatechange = () => {
        if (4 === this.readyState && 200 === this.status) {
            console.log("object program: \"" + this.responseText + "\"");
        }
    };
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    params = "csrfmiddlewaretoken=" + document.getElementsByName("csrfmiddlewaretoken")[0].value +
        "&script=" + _logoScript;
    xmlhttp.send(params);
}

function callbackFunction(_xmlhttp) {
    //    if (200 == _xmlhttp.status) {
    console.log("object program: \"" + _xmlhttp.responseText + "\"");
    //    }
}
