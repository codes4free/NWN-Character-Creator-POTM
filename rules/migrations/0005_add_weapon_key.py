from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rules", "0004_add_magic_rule_keys"),
    ]

    operations = [
        migrations.AddField(
            model_name="weapon",
            name="key",
            field=models.SlugField(default="legacy-weapon", max_length=150, unique=True),
            preserve_default=False,
        ),
    ]
