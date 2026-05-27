from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("rules", "0003_add_core_rule_keys"),
    ]

    operations = [
        migrations.AddField(
            model_name="spellschool",
            name="key",
            field=models.SlugField(default="legacy-spell-school", max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="spell",
            name="key",
            field=models.SlugField(default="legacy-spell", max_length=150, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="clericdomain",
            name="key",
            field=models.SlugField(default="legacy-cleric-domain", max_length=100, unique=True),
            preserve_default=False,
        ),
    ]
