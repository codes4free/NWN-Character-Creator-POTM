from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rules", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="race",
            name="key",
            field=models.SlugField(default="legacy-race", max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="subrace",
            name="key",
            field=models.SlugField(default="legacy-subrace", max_length=100, unique=True),
            preserve_default=False,
        ),
    ]
