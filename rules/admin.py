from django.contrib import admin

from .models import (
    CharacterClass,
    ClericDomain,
    Feat,
    PrestigeClass,
    Race,
    RuleSource,
    Skill,
    Spell,
    SpellSchool,
    Subrace,
    Weapon,
)


class RuleRecordAdmin(admin.ModelAdmin):
    list_filter = ["source_status", "source"]
    readonly_fields = ["created_at", "updated_at"]
    search_fields = ["name", "notes", "source_section"]


@admin.register(RuleSource)
class RuleSourceAdmin(admin.ModelAdmin):
    list_display = ["name", "url", "updated_at"]
    search_fields = ["name", "url", "description", "notes"]
    readonly_fields = ["created_at", "updated_at"]


@admin.register(Race)
class RaceAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "size", "favored_class", "source_status"]


@admin.register(Subrace)
class SubraceAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "base_race", "source_status"]
    list_filter = ["base_race", "source_status", "source"]


@admin.register(CharacterClass)
class CharacterClassAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "hit_die", "skill_points_per_level", "base_attack_bonus", "source_status"]


@admin.register(PrestigeClass)
class PrestigeClassAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "hit_die", "skill_points_per_level", "source_status"]


@admin.register(Skill)
class SkillAdmin(RuleRecordAdmin):
    list_display = ["name", "key", "ability", "trained_only", "armor_check_penalty", "source_status"]


@admin.register(Feat)
class FeatAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "feat_type", "source_status"]


@admin.register(SpellSchool)
class SpellSchoolAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "source_status"]


@admin.register(Spell)
class SpellAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "school", "source_status"]
    list_filter = ["school", "source_status", "source"]


@admin.register(ClericDomain)
class ClericDomainAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "source_status"]


@admin.register(Weapon)
class WeaponAdmin(RuleRecordAdmin):
    list_display = ["key", "name", "category", "damage", "critical", "source_status"]
