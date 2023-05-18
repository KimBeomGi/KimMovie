from rest_framework import serializers
from .models import Movie, Genre

# 영화 리뷰 게시판
# 영화 리뷰 목록
class MovieListSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'title', 'overview')
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