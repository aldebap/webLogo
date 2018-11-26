#!	/usr/bin/python3

################################################################################
#	views.py  -  Nov-25-2018 by aldebap
#
#	Views for the "Web LOGO" web server
################################################################################

from django.http import HttpResponse

def index( _request ):
    return HttpResponse( 'Web LOGO' )
