#!	/usr/bin/python3

################################################################################
#	settings.py  -  Nov-25-2018 by aldebap
#
#	Settings for the "Web LOGO" web server
################################################################################

from django.conf import settings

settings.configure(
    DEBUG = True,
    SECRET_KEY = 'thisisthesecretkey',
    ROOT_URLCONF = __name__,
    MIDDLEWARE_CLASSES = (
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ),
)
