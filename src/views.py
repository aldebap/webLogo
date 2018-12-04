#!	/usr/bin/python

################################################################################
#	views.py  -  Nov-25-2018 by aldebap
#
#	Views for the "Web LOGO" web server
################################################################################

from django.http import HttpResponse
from django.shortcuts import render

def index( _request ):
    return render( _request, 'webLogo.html', {} )

def logoParser( _request ):
    if "POST" == _request.method:
        if "square" == _request.POST[ "script" ]:
            return HttpResponse( """clearCanvas();
showTurtle();
penDown();
    
for( var i = 1; i <= 4; i++ ) {
    turtleForward( 50 );
    turtleLeft( 90 );
}""" )

    return HttpResponse( 'LOGO --> JavaScript' )