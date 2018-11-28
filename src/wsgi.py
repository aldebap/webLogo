#!	/usr/bin/python

################################################################################
#	wsgi.py  -  Nov-26-2018 by aldebap
#
#	WSGI Application for the "Web LOGO" web server
################################################################################

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault( 'DJANGO_SETTINGS_MODULE', 'settings' )

application = get_wsgi_application()
