from rest_framework import serializers
from .models import User


# # follow 데이터를 받아오기 위함
# class FollowSerializer(serializers.ModelSerializer):
#     # username = serializers.CharField(source='user.username', read_only=True)
#     followings = serializers.SerializerMethodField()
#     followers = serializers.SerializerMethodField()
    
#     def get_followings(self, obj):
#         return obj.followings.count()

#     def get_followers(self, obj):
#         return obj.followers.count()
    
#     class Meta:
#         model = User
#         fields = ('followings', 'followers')
#         # fields = '__all__'
    
#     def get_followers(self, obj):
#         return obj.followers.all().values_list('id', flat=True)

#     def get_followings(self, obj):
#         return obj.followings.all().values_list('id', flat=True)

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
