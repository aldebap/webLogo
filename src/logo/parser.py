#!	/usr/bin/python

################################################################################
#	parser.py  -  Dec-03-2018 by aldebap
#
#	The Logo Parser
################################################################################

def logoParser( _script ):
    if "square" == _script:
        return """clearCanvas();
showTurtle();
penDown();
    
for( var i = 1; i <= 4; i++ ) {
    turtleForward( 50 );
    turtleLeft( 90 );
}"""

    return "//  Logo Parser"