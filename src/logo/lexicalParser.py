#!	/usr/bin/python

################################################################################
#	lexicalParser.py  -  Dec-09-2018 by aldebap
#
#	The Logo Lexical Parser
################################################################################

import re

import logo.logo

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
