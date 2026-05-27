from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import DetailView, ListView

from .forms import CharacterClassProgressionForm, CharacterForm, CharacterSkillForm
from .models import Character
from .point_buy import remaining_points, total_point_buy_cost


class CharacterListView(ListView):
    model = Character
    template_name = "characters/list.html"
    context_object_name = "characters"

    def get_queryset(self):
        return (
            Character.objects.select_related("race", "subrace")
            .prefetch_related("class_levels__character_class")
            .order_by("name")
        )


class CharacterDetailView(DetailView):
    model = Character
    template_name = "characters/detail.html"
    context_object_name = "character"

    def get_queryset(self):
        return Character.objects.select_related("race", "subrace").prefetch_related(
            "class_levels__character_class"
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        scores = self.object.base_ability_scores
        context["point_buy_spent"] = total_point_buy_cost(scores)
        context["point_buy_remaining"] = remaining_points(scores)
        return context


def create_character(request):
    if request.method == "POST":
        form = CharacterForm(request.POST)
        if form.is_valid():
            character = form.save()
            return redirect(character)
    else:
        form = CharacterForm()

    return render(
        request,
        "characters/form.html",
        {
            "form": form,
            "form_title": "New Character",
            "submit_label": "Create Character",
            "race_modifiers": {
                str(race.pk): race.attribute_modifiers
                for race in form.fields["race"].queryset
            },
            "ability_costs": [
                ("9-14", "1 point per increase"),
                ("15-16", "2 points per increase"),
                ("17-18", "3 points per increase"),
            ],
        },
    )


def edit_character(request, pk):
    character = get_object_or_404(
        Character.objects.prefetch_related("class_levels__character_class"),
        pk=pk,
    )

    if request.method == "POST":
        form = CharacterForm(request.POST, instance=character)
        if form.is_valid():
            character = form.save()
            return redirect(character)
    else:
        form = CharacterForm(instance=character)

    return render(
        request,
        "characters/form.html",
        {
            "form": form,
            "form_title": f"Edit {character.name}",
            "submit_label": "Save Character",
            "character": character,
            "race_modifiers": {
                str(race.pk): race.attribute_modifiers
                for race in form.fields["race"].queryset
            },
            "ability_costs": [
                ("9-14", "1 point per increase"),
                ("15-16", "2 points per increase"),
                ("17-18", "3 points per increase"),
            ],
        },
    )


def edit_class_progression(request, pk):
    character = get_object_or_404(
        Character.objects.prefetch_related("class_levels__character_class"),
        pk=pk,
    )

    if request.method == "POST":
        form = CharacterClassProgressionForm(request.POST, character=character)
        if form.is_valid():
            form.save()
            return redirect(character)
    else:
        form = CharacterClassProgressionForm(character=character)

    return render(
        request,
        "characters/class_progression_form.html",
        {
            "character": character,
            "form": form,
        },
    )


def edit_skills(request, pk):
    character = get_object_or_404(
        Character.objects.select_related("race", "subrace")
        .prefetch_related("class_levels__character_class", "skills__skill"),
        pk=pk,
    )

    if request.method == "POST":
        form = CharacterSkillForm(request.POST, character=character)
        if form.is_valid():
            form.save()
            return redirect(character)
    else:
        form = CharacterSkillForm(character=character)

    return render(
        request,
        "characters/skills_form.html",
        {
            "character": character,
            "form": form,
        },
    )
