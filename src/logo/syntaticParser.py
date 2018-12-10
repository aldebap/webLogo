#!	/usr/bin/python

################################################################################
#	syntaticParser.py  -  Dec-09-2018 by aldebap
#
#	The Logo Syntatic Parser
################################################################################

import logo.logo

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
            if instructionPath == logoSyntax[ pathName ]:
                syntaticTree.append( pathName )

    return syntaticTree
