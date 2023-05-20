from rest_framework import serializers
from .models import User

class FollowSerializer(serializers.ModelSerializer):
    followings_count = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    
    def get_followings_count(self, obj):
        return obj.followings.count()

    def get_followers_count(self, obj):
        return obj.followers.count()
    
    class Meta:
        model = User
        fields = ('followings_count', 'followers_count', 'followings', 'followers')
        
        
# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         # fields = ('followings_count', 'followers_count', 'followings', 'followers')
#         fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    followings_count = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    
    def get_followings_count(self, obj):
        return obj.followings.count()

    def get_followers_count(self, obj):
        return obj.followers.count()
    
    class Meta:
        model = User
        fields = ('id', 'password', 'last_login', 'is_superuser', 
                  'username', 'first_name', 'last_name', 'email', 
                  'is_staff', 'is_active', 'date_joined', 'exp', 
                  'groups', 'user_permissions', 'followings', 'followers',
                  'followings_count', 'followers_count', 'idealmovie',)     # 'idealmovie', 추가함
        