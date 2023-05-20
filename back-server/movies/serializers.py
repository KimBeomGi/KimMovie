from rest_framework import serializers
from .models import Movie, Genre
# from .models import Ideal
from accounts.models import User

# 영화 리뷰 게시판
# 영화 리뷰 목록
class MovieListSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'title', 'overview','backdrop_path','poster_path', 'key')
        # fields = ('id', 'title', 'content', 'user', 'username')

class MovieSerializer(serializers.ModelSerializer):

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