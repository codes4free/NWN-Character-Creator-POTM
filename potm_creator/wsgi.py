"""WSGI config for the POTM Character Creator project."""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "potm_creator.settings")

application = get_wsgi_application()
