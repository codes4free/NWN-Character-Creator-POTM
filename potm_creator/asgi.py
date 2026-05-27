"""ASGI config for the POTM Character Creator project."""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "potm_creator.settings")

application = get_asgi_application()
