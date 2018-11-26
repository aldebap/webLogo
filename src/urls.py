#!	/usr/bin/python3

################################################################################
#	urls.py  -  Nov-25-2018 by aldebap
#
#	URLs for the "Web LOGO" web server
################################################################################

from django.conf.urls import url

import views

urlpatterns = (
    url( r'^$', views.index ),
)