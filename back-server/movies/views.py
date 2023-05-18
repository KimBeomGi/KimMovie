from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import MovieListSerializer, MovieSerializer, GenreSerializer
from .models import Genre, Movie

# Create your views here.

# 영화 전체 데이터
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        # articles = Article.objects.all()
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)

# 영화 상세 데이터
@api_view(['GET'])
def movie_detail(request, review_pk):
    # article = Article.objects.get(pk=article_pk)
    movie = get_object_or_404(Movie, pk=review_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        # print(serializer.data)
        return Response(serializer.data)

# 장르 데이터
@api_view(['GET'])
def get_genre(request):
    if request.method == 'GET':
        # genre = Genre.objects.get(pk=request.GET.get('genre'))
        # genres = get_list_or_404(Genre)
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data)

# 좋아요 기능
def movie_like(request):
    movie = get_object_or_404(Movie, pk=request.POST.get('movie_pk'))
    is_liked = movie.like_users.filter(id = request.user.id).exists()

    if is_liked :
        movie.like_users.remove(request.user)
    else:
        movie.like_users.add(request.user)
    
    # return Response({'status': 'success', 'message': 'Liked status toggled successfully.'})
    return Response(status=status.HTTP_200_OK)
