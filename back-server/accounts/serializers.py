from rest_framework import serializers
from .models import User

class FollowSerializer(serializers.ModelSerializer):
    followings_count = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    followings_name = serializers.SerializerMethodField()
    followers_name = serializers.SerializerMethodField()
    
    def get_followings_count(self, obj):
        return obj.followings.count()

    def get_followers_count(self, obj):
        return obj.followers.count()
    
    def get_followings_name(self, obj):
        return [user.username for user in obj.followings.all()]

    def get_followers_name(self, obj):
        return [user.username for user in obj.followers.all()]
    
    class Meta:
        model = User
        # fields = ('followings_count', 'followers_count', 'followings', 'followers')
        fields = ('followings_count', 'followers_count', 'followings', 'followers', 'followings_name', 'followers_name')
        
        
# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         # fields = ('followings_count', 'followers_count', 'followings', 'followers')
#         fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    followings_count = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    followings_name = serializers.SerializerMethodField()
    followers_name = serializers.SerializerMethodField()
    
    def get_followings_count(self, obj):
        return obj.followings.count()

    def get_followers_count(self, obj):
        return obj.followers.count()
    
    def get_followings_name(self, obj):
        return [user.username for user in obj.followings.all()]

    def get_followers_name(self, obj):
        return [user.username for user in obj.followers.all()]
    
    class Meta:
        model = User
        fields = ('id', 'password', 'last_login', 'is_superuser', 
                  'username', 'first_name', 'last_name', 'email', 
                  'is_staff', 'is_active', 'date_joined', 'exp', 'point',
                  'groups', 'user_permissions', 'followings', 'followers',
                  'followings_name', 'followers_name',
                  'followings_count', 'followers_count', 'idealmovie',)     # 'idealmovie', 추가함
        