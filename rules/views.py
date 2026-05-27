from django.shortcuts import render

from .models import (
    CharacterClass,
    ClericDomain,
    Feat,
    PrestigeClass,
    Race,
    RuleSource,
    Skill,
    SourceStatus,
    Spell,
    SpellSchool,
    Subrace,
    Weapon,
)


def overview(request):
    rule_counts = [
        ("Rule sources", RuleSource.objects.count()),
        ("Races", Race.objects.count()),
        ("Subraces", Subrace.objects.count()),
        ("Classes", CharacterClass.objects.count()),
        ("Prestige classes", PrestigeClass.objects.count()),
        ("Skills", Skill.objects.count()),
        ("Feats", Feat.objects.count()),
        ("Spell schools", SpellSchool.objects.count()),
        ("Spells", Spell.objects.count()),
        ("Cleric domains", ClericDomain.objects.count()),
        ("Weapons", Weapon.objects.count()),
    ]

    return render(
        request,
        "rules/overview.html",
        {
            "rule_counts": rule_counts,
            "sources": RuleSource.objects.order_by("name"),
        },
    )


def needs_verification(request):
    groups = [
        ("Races", Race),
        ("Subraces", Subrace),
        ("Classes", CharacterClass),
        ("Prestige classes", PrestigeClass),
        ("Skills", Skill),
        ("Feats", Feat),
        ("Spell schools", SpellSchool),
        ("Spells", Spell),
        ("Cleric domains", ClericDomain),
        ("Weapons", Weapon),
    ]
    grouped_records = [
        (
            label,
            model.objects.filter(source_status=SourceStatus.NEEDS_VERIFICATION)
            .select_related("source")
            .order_by("name"),
        )
        for label, model in groups
    ]

    return render(
        request,
        "rules/needs_verification.html",
        {
            "grouped_records": grouped_records,
            "total_needs_verification": sum(records.count() for _, records in grouped_records),
        },
    )
