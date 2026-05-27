from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rules", "0002_add_rule_keys"),
    ]

    operations = [
        migrations.AddField(
            model_name="characterclass",
            name="key",
            field=models.SlugField(default="legacy-class", max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="prestigeclass",
            name="key",
            field=models.SlugField(default="legacy-prestige-class", max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="feat",
            name="key",
            field=models.SlugField(default="legacy-feat", max_length=150, unique=True),
            preserve_default=False,
        ),
    ]
