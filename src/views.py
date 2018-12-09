#!	/usr/bin/python

################################################################################
#	views.py  -  Nov-25-2018 by aldebap
#
#	Views for the "Web LOGO" web server
################################################################################

from django.http import HttpResponse
from django.shortcuts import render

from logo.parser import logoParser

def index( _request ):
    return render( _request, 'webLogo.html', {} )

def webLogoParser( _request ):
    if "POST" == _request.method:
        return HttpResponse( logoParser( _request.POST[ "script" ] ) )

    return HttpResponse( "alert( 'LOGO --> JavaScript' );" )
