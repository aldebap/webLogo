#!	/usr/bin/python3

################################################################################
#	urls.py  -  Nov-25-2018 by aldebap
#
#	URLs for the "Web LOGO" web server
################################################################################

from django.urls import path
#from django.conf.urls import path

import views

urlpatterns = (
    path( 'index/', views.index ),
)
