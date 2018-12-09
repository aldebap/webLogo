#!	/usr/bin/python

################################################################################
#	parser.py  -  Dec-03-2018 by aldebap
#
#	The Logo Parser
################################################################################

import re
import sys

def logoParser( _script ):
    if "square" == _script:
        return """clearCanvas();
showTurtle();
penDown();
    
for( var i = 1; i <= 4; i++ ) {
    setTimeout( () => {
        turtleForward( 50 );
        turtleLeft( 90 );
    }, 1000 );
}"""

    return "alert( \"" + str( lexicalParser( _script ) ) + "\" );"

#   reserved words

forward = "forward"
abbreviatedForward = "abbreviatedForward"
left = "left"

reservedWords = {
    forward: "FORWARD",
    abbreviatedForward: "FD",
    left: "LEFT",
}

#   syntatic elements

reserved = "reserved"
number = "number"
identifier = "identifier"

#   lexical parser for Logo script

def lexicalParser( _script ):

    lexicTree = []
    token = ""
    lexicLeaf = []

    #   just to make things easy to parse last line
    _script = _script + '\n'

    for byte in _script:
        if ' ' == byte or '\n' == byte:
            isReserved = False

            for reservedWord in reservedWords.keys():
                if reservedWords[ reservedWord ] == token.upper():
                    lexicLeaf.append( { reserved: reservedWord } )
                    isReserved = True
                    break

            if False == isReserved:
                if re.match( r'^\d+$', token ):
                    lexicLeaf.append( { number: token } )
                else:
                    lexicLeaf.append( { identifier: token } )

            token = ""
                
        if ' ' == byte:
            continue
        elif '\n' == byte:
            lexicTree.append( lexicLeaf )
            lexicLeaf = []
            token = ""
        else:
            token += byte

    return lexicTree

#   syntatic parser for Logo script

def syntaticParser( _lexicTree ):
    sys.stderr.write( "[debug] Lexic tree: " + str( _lexicTree ) + "\n" )
