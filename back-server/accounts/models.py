from django.db import models
from django.contrib.auth.models import AbstractUser
from movies.models import Movie

from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.
class User(AbstractUser):
    exp = models.IntegerField(default=0)
    point = models.IntegerField(default=100)    # 포인트 생성
    followings = models.ManyToManyField("self", symmetrical=False, related_name='followers')
    grade = models.CharField(max_length=20, default="새싹")  # 등급 필드 추가
    
    # idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser',null=True, blank=True)
    idealmovie = models.ManyToManyField(Movie, related_name='choiceidealuser', blank=True)
    # profile_img = models.CharField(max_length=256, default="")
    
    # superuser는 기본으로 1000000 exp, point 가짐
    def save(self, *args, **kwargs):
        if self.is_superuser:   # user가 superuser인지 확인
            self.exp = 1000000
            self.point = 1000000
        # super().save(*args, **kwargs)
    
    # exp에 따른 등급 변환을 위한 부분
    # def save(self, *args, **kwargs):
        # exp에 따라 등급을 설정
        if self.exp > 2000:
            self.grade = "플래티넘"
        elif self.exp > 1000:
            self.grade = "골드"
        elif self.exp > 500:
            self.grade = "실버"
        elif self.exp > 150:
            self.grade = "브론즈"
        else:
            self.grade = "새싹"

        super().save(*args, **kwargs)

# User 모델의 post_save 신호를 받아서 등급을 업데이트
@receiver(post_save, sender=User)
def update_user_grade(sender, instance, created, **kwargs):
    if created:
        # 새로 생성된 경우에만 등급을 업데이트
        instance.save()