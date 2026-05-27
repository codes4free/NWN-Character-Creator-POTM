from django.urls import path

from . import views


app_name = "rules"

urlpatterns = [
    path("", views.overview, name="overview"),
    path("needs-verification/", views.needs_verification, name="needs_verification"),
]
