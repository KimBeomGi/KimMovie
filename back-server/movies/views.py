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
# from .serializers import IdealMovieSerializer, WinIdealMovieSerializer
from .models import Genre, Movie
# from .models import Ideal
from random import *

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
def movie_detail(request, movie_pk):
    # article = Article.objects.get(pk=article_pk)
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        # print(serializer.data)
        return Response(serializer.data)

# 장르 데이터
@api_view(['GET'])
def get_genre(request):
    if request.method == 'GET':
        # genre = Genre.objects.get(pk=request.GET.get('genre'))
        genres = get_list_or_404(Genre)
        # genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data)

# 좋아요 기능
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_like(request, movie_pk):
    # movie = get_object_or_404(Movie, pk=request.POST.get('movie_pk'))
    movie = get_object_or_404(Movie, pk=movie_pk)
    is_liked = movie.like_users.filter(id = request.user.id).exists()

    if is_liked :
        movie.like_users.remove(request.user)
    else:
        movie.like_users.add(request.user)
    
    # return Response({'status': 'success', 'message': 'Liked status toggled successfully.'})
    return Response(status=status.HTTP_200_OK)

# 영화 추천 기능
@api_view(['GET'])
def recommend(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie)
        # movies = list(Movie.objects.all())
        movies_recommend = sample(movies, 50)
        serializer = MovieListSerializer(movies_recommend, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
######################
# 영화 이상형 월드컵 기능

# 64개의 데이터를 던져줌.
# @api_view(['GET'])
# def ideal_movie(request):

#     if request.method == 'GET':
#         movies = get_list_or_404(Movie)
#         # movies = list(Movie.objects.all())
#         ideal_movies = sample(movies, 64)
#         serializer = IdealMovieSerializer(ideal_movies, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

    
# # 최종 승리 데이터 vue에서 받아옴. 마치 like 구현과 같음.
# @api_view(['POST'])
# def win_ideal_movie(request):
#     if request.method == 'POST':
#         serializer = IdealMovieSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)