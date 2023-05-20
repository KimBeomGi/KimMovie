from django.db import models
from django.contrib.auth.models import AbstractUser
from movies.models import Movie


# Create your models here.
class User(AbstractUser):
    exp = models.IntegerField(default=0)
    followings = models.ManyToManyField("self", symmetrical=False, related_name='followers')
    # idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser',null=True, blank=True)
    idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser', blank=True)
    # profile_img = models.CharField(max_length=256, default="")
    
    # superuser는 기본으로 50000 exp 가짐
    def save(self, *args, **kwargs):
        if self.is_superuser and self.exp == 0:   # user가 superuser인지 확인
            self.exp = 50000    # 맞으면 exp 50000 적립
        super().save(*args, **kwargs)