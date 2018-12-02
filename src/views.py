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
    return HttpResponse( 'LOGO --> JavaScript' )