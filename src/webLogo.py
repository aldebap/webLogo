#!	/usr/bin/python3

################################################################################
#	webLogo.py  -  Nov-25-2018 by aldebap
#
#	The "Web LOGO" web server
################################################################################

from django.core.management import execute_from_command_line
import  sys

import  views
import  urls
import  settings

if __name__ == "__main__":
    execute_from_command_line( sys.argv )
