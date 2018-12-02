#!	/usr/bin/python

################################################################################
#	urls.py  -  Nov-26-2018 by aldebap
#
#	URLs for the "Web LOGO" web server
################################################################################

from django.urls import path

import  views

urlpatterns = [
    path( 'index/', views.index ),
    path( 'logoparser/', views.logoParser ),
]
