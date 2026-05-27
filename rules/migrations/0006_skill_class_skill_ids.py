from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rules", "0005_add_weapon_key"),
    ]

    operations = [
        migrations.AddField(
            model_name="skill",
            name="class_skill_ids",
            field=models.JSONField(blank=True, default=list),
        ),
    ]
