from django.db import models


class SourceStatus(models.TextChoices):
    VERIFIED = "verified", "Verified"
    NEEDS_VERIFICATION = "needs_verification", "Needs verification"
    CONFLICTING = "conflicting", "Conflicting"


class RuleSource(models.Model):
    name = models.CharField(max_length=200, unique=True)
    url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class RuleRecord(models.Model):
    source = models.ForeignKey(
        RuleSource,
        on_delete=models.PROTECT,
        related_name="%(class)s_records",
        null=True,
        blank=True,
    )
    source_section = models.CharField(max_length=255, blank=True)
    source_status = models.CharField(
        max_length=32,
        choices=SourceStatus.choices,
        default=SourceStatus.NEEDS_VERIFICATION,
    )
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Race(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    creature_type = models.CharField(max_length=100, blank=True)
    size = models.CharField(max_length=50, blank=True)
    movement_speed = models.PositiveSmallIntegerField(null=True, blank=True)
    vision = models.CharField(max_length=100, blank=True)
    favored_class = models.CharField(max_length=100, blank=True)
    level_adjustment = models.SmallIntegerField(default=0)
    attribute_modifiers = models.JSONField(default=dict, blank=True)
    skill_bonuses = models.JSONField(default=dict, blank=True)
    racial_features = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Subrace(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    base_race = models.ForeignKey(Race, on_delete=models.PROTECT, related_name="subraces")
    attribute_modifiers = models.JSONField(default=dict, blank=True)
    skill_bonuses = models.JSONField(default=dict, blank=True)
    special_rules = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["base_race__name", "name"]

    def __str__(self) -> str:
        return f"{self.name} ({self.base_race.name})"


class CharacterClass(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    hit_die = models.CharField(max_length=10, blank=True)
    skill_points_per_level = models.PositiveSmallIntegerField(null=True, blank=True)
    base_attack_bonus = models.CharField(max_length=50, blank=True)
    saving_throws = models.JSONField(default=dict, blank=True)
    class_skills = models.JSONField(default=list, blank=True)
    special_progression = models.JSONField(default=list, blank=True)
    alignment_restrictions = models.JSONField(default=list, blank=True)

    class Meta:
        verbose_name_plural = "character classes"
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class PrestigeClass(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    hit_die = models.CharField(max_length=10, blank=True)
    skill_points_per_level = models.PositiveSmallIntegerField(null=True, blank=True)
    requirements = models.JSONField(default=dict, blank=True)
    class_skills = models.JSONField(default=list, blank=True)
    special_progression = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Skill(RuleRecord):
    name = models.CharField(max_length=100, unique=True)
    key = models.SlugField(max_length=100, unique=True)
    ability = models.CharField(max_length=3)
    trained_only = models.BooleanField(default=False)
    armor_check_penalty = models.BooleanField(default=False)
    class_skill_ids = models.JSONField(default=list, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Feat(RuleRecord):
    key = models.SlugField(max_length=150, unique=True)
    name = models.CharField(max_length=150, unique=True)
    feat_type = models.CharField(max_length=100, blank=True)
    requirements = models.JSONField(default=dict, blank=True)
    effects = models.JSONField(default=list, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class SpellSchool(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    opposition_rules = models.JSONField(default=dict, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Spell(RuleRecord):
    key = models.SlugField(max_length=150, unique=True)
    name = models.CharField(max_length=150, unique=True)
    school = models.ForeignKey(
        SpellSchool,
        on_delete=models.PROTECT,
        related_name="spells",
        null=True,
        blank=True,
    )
    levels = models.JSONField(default=dict, blank=True)
    components = models.JSONField(default=list, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class ClericDomain(RuleRecord):
    key = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=100, unique=True)
    granted_power = models.TextField(blank=True)
    domain_spells = models.JSONField(default=dict, blank=True)
    allowed_deities = models.JSONField(default=list, blank=True)
    alignment_restrictions = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Weapon(RuleRecord):
    key = models.SlugField(max_length=150, unique=True)
    name = models.CharField(max_length=150, unique=True)
    category = models.CharField(max_length=100, blank=True)
    damage = models.CharField(max_length=50, blank=True)
    critical = models.CharField(max_length=50, blank=True)
    damage_type = models.CharField(max_length=100, blank=True)
    properties = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name
