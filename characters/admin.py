from django.contrib import admin

from .models import Character, CharacterClassLevel, CharacterSkill


class CharacterClassLevelInline(admin.TabularInline):
    model = CharacterClassLevel
    extra = 0


class CharacterSkillInline(admin.TabularInline):
    model = CharacterSkill
    extra = 0


@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    list_display = ["name", "race", "subrace", "alignment", "total_level", "updated_at"]
    list_filter = ["race", "subrace", "alignment"]
    search_fields = ["name", "deity", "background", "notes"]
    readonly_fields = ["created_at", "updated_at"]
    fieldsets = [
        (
            "Identity",
            {
                "fields": [
                    "name",
                    "gender",
                    "alignment",
                    "deity",
                    "background",
                    "notes",
                ]
            },
        ),
        ("Ancestry", {"fields": ["race", "subrace"]}),
        (
            "Base Ability Scores",
            {
                "fields": [
                    ("base_str", "base_dex", "base_con"),
                    ("base_int", "base_wis", "base_cha"),
                ]
            },
        ),
        ("Timestamps", {"fields": ["created_at", "updated_at"]}),
    ]
    inlines = [CharacterClassLevelInline, CharacterSkillInline]
