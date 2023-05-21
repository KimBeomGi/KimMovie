from django.db import models
from django.contrib.auth.models import AbstractUser
from movies.models import Movie


# Create your models here.
class User(AbstractUser):
    exp = models.IntegerField(default=0)
    point = models.IntegerField(default=100)    # 포인트 생성
    followings = models.ManyToManyField("self", symmetrical=False, related_name='followers')
    # idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser',null=True, blank=True)
    idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser', blank=True)
    # profile_img = models.CharField(max_length=256, default="")
    
    # superuser는 기본으로 1000000 exp, point 가짐
    def save(self, *args, **kwargs):
        if self.is_superuser:   # user가 superuser인지 확인
            self.exp = 1000000
            self.point = 1000000
        super().save(*args, **kwargs)