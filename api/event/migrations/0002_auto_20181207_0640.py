# Generated by Django 2.1.4 on 2018-12-07 06:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ('create_date',)},
        ),
        migrations.RenameField(
            model_name='event',
            old_name='delete',
            new_name='archived',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='delete_date',
            new_name='archived_date',
        ),
    ]
