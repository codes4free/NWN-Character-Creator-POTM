"""URL configuration for the POTM Character Creator."""

from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("", include("rules.urls")),
    path("characters/", include("characters.urls")),
    path("admin/", admin.site.urls),
]
