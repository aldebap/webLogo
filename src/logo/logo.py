#!	/usr/bin/python

################################################################################
#	logo.py  -  Dec-09-2018 by aldebap
#
#	The Logo Language elements
################################################################################

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
