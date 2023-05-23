from rest_framework import serializers
from .models import Movie, Genre, Quiz1, Quiz2
# from .models import Ideal
from accounts.models import User
import json

# 영화 리뷰 게시판
# 영화 리뷰 목록
class MovieListSerializer(serializers.ModelSerializer):
    # user_id = serializers.SerializerMethodField()

    # def get_user_id(self, obj):
    #     request = self.context.get('request')
    #     if request and request.user.is_authenticated:
    #         return request.user.id
    #     return None

    class Meta:
        model = Movie
        fields = ('id', 'title', 'overview','backdrop_path','poster_path', 'key')
        # fields = ('id', 'title', 'content', 'user', 'username')

class MovieSerializer(serializers.ModelSerializer):
    # genres = serializers.SerializerMethodField()
    genres_name = serializers.SerializerMethodField()

    # def get_genres(self, movie):
    #     return [genre.id for genre in movie.genres.all()]

    def get_genres_name(self, movie):
        return [genre.name for genre in movie.genres.all()]
    
    class Meta:
        model = Movie
        fields = '__all__'
        read_only_fields = ('review',)


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
        

###################################################################
# 영화 이상형 월드컵을 위한 serializer

class IdealMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title', 'poster_path',)


## 아래 내용 확인해보니 필요없어짐
# class WinIdealMovieSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Ideal
#         fields = '__all__'

# class WinIdealMovieSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'idealmovie',)

###############################################################
# 퀴즈를 위한 serializer
class Quiz1Serializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz1
        fields = '__all__'


class Quiz2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz2
        fields = '__all__'