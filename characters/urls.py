from django.urls import path

from . import views


app_name = "characters"

urlpatterns = [
    path("", views.CharacterListView.as_view(), name="list"),
    path("new/", views.create_character, name="create"),
    path("<int:pk>/", views.CharacterDetailView.as_view(), name="detail"),
    path("<int:pk>/edit/", views.edit_character, name="edit"),
    path("<int:pk>/classes/", views.edit_class_progression, name="class_progression"),
    path("<int:pk>/skills/", views.edit_skills, name="skills"),
]
