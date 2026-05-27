from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("characters", "0003_characterskill"),
        ("rules", "0006_skill_class_skill_ids"),
    ]

    operations = [
        migrations.CreateModel(
            name="CharacterFeat",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "character",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="feats",
                        to="characters.character",
                    ),
                ),
                (
                    "feat",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="character_feats",
                        to="rules.feat",
                    ),
                ),
            ],
            options={
                "ordering": ["feat__name"],
            },
        ),
        migrations.AddConstraint(
            model_name="characterfeat",
            constraint=models.UniqueConstraint(
                fields=("character", "feat"),
                name="unique_character_feat",
            ),
        ),
    ]
