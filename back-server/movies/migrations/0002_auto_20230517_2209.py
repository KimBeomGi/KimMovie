# Generated by Django 3.2.18 on 2023-05-17 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='backdrop_path',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='key',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='overview',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='popularity',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='poster_path',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='vote_average',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='vote_count',
            field=models.IntegerField(null=True),
        ),
    ]
