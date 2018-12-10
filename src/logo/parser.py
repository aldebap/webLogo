#!	/usr/bin/python

################################################################################
#	parser.py  -  Dec-03-2018 by aldebap
#
#	The Logo Parser
################################################################################

import sys

#from logo.lexicalParser import lexicalParser
#from logo.syntaticParser import syntaticParser
import re

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

    lexicTree = lexicalParser( _script )
    sys.stderr.write( "[debug] Lexic tree: " + str( lexicTree ) + "\n" )

    syntaticTree = syntaticParser( lexicTree )
    sys.stderr.write( "[debug] Syntatic tree: " + str( syntaticTree ) + "\n" )

    return "alert( \"" + str( syntaticTree ) + "\" );"

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

#   semantical elements

forwardOperation = "forward"
abbreviateForwardOperation = "abbreviateForward"
leftOperation = "left"

#   syntatic paths

logoSyntax = {
    forwardOperation: [ forward, number ],
    abbreviateForwardOperation: [ abbreviatedForward, number ],
    leftOperation: [ left, number ],
}

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

    syntaticTree = []

    for instruction in _lexicTree:

        instructionPath = []

        for element in instruction:
            for subElement in element.keys():
                if reversed == subElement:
                    instructionPath.append( element[ subElement ] )
                else:
                    instructionPath.append( subElement )

        for pathName in logoSyntax.keys():
            #   TODO: need to compare the two arrays to fix the bug
            if len( instructionPath ) == len( logoSyntax[ pathName ] ) and instructionPath == logoSyntax[ pathName ]:
                syntaticTree.append( pathName )

    return syntaticTree
