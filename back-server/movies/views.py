from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import MovieListSerializer, MovieSerializer, GenreSerializer
from .serializers import IdealMovieSerializer, Quiz1Serializer, Quiz2Serializer
from .models import Genre, Movie, Quiz1, Quiz2
# from .models import Ideal
import random

from django.contrib.auth import get_user_model

# Create your views here.

# 영화 전체 데이터, 검색기능 구현 완료.
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        # 브라우저에서 검색한 값을 들고옴
        # http://127.0.0.1:8000/api/v1/?query={검색내용}
        search_query = request.GET.get('query')
        # 검색값이 있으면 filter로 걸러냄
        if search_query:
            movies = list(Movie.objects.filter(title__icontains=search_query))
        # query문 자체가 없으면 전체 데이터 불러오기
        # http://127.0.0.1:8000/api/v1/
        else:
            movies = get_list_or_404(Movie)
            random.shuffle(movies)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)

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
        movies_recommend = random.sample(movies, 50)
        serializer = MovieListSerializer(movies_recommend, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
######################
# 영화 이상형 월드컵 기능


# @api_view(['GET'])
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def ideal_movie(request):
    if request.user.is_authenticated:
        # 최초 게임을 위한 64개의 데이터를 던져줌.
        if request.method == 'GET':
            movies = get_list_or_404(Movie)
            # movies = list(Movie.objects.all())
            ideal_movies = random.sample(movies, 64)
            serializer = IdealMovieSerializer(ideal_movies, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        # 최종 승리 영화 DB에 입력받기
        # 참고: 이건 되는지 확인 못함......
        elif request.method == 'POST':
            movie_pk = request.POST.get('movie_id')
            person = get_user_model().objects.get(pk=request.user.pk)
            person.idealmovie.add(movie_pk)
            return Response({'message': f'Movie ID: {movie_pk}'}, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

    
# 최종 승리 데이터 vue에서 받아옴. 마치 like 구현과 같음.
# 작동 잘 됨 확인 완료
# 해당 주소로 연결 시에 작동 함path('ideal_movie/<int:movie_pk>/', views.win_ideal_movie),
# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def win_ideal_movie(request, movie_pk):
#     if request.method == 'POST':
#         person = get_user_model().objects.get(pk=request.user.pk)
#         person.idealmovie.add(movie_pk)
#         return Response(status=status.HTTP_201_CREATED)
#     return Response(status=status.HTTP_400_BAD_REQUEST)


########################
# 영화 퀴즈(3지선다)
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def quiz1(request):
    if request.user.is_authenticated:
        user = request.user
        # user 포인트 확인
        if user.point < 50:
            context = {
                "question" : "포인트가 충분하지 않습니다."
            }
            return Response(context)
        if request.method == 'GET':
            quizzes = get_list_or_404(Quiz1)
            quiz = random.sample(quizzes, 1)[0]
            options = quiz.options
            random.shuffle(options)
            serializer = Quiz1Serializer(quiz)
            # user포인트 차감
            user.point -= 50
            user.save()
            print('포인트 50 감소!')
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        ##### 아래 POST 부분은 손볼 필요성 있음 ####
        elif request.method == 'POST':
            solve = request.data.get('solve')
            quiz_id = request.data.get('quiz_id')       # post로 받아오게될 quiz1의 id를 받아냄
            
            quiz = get_object_or_404(Quiz1, pk=quiz_id)
            print(quiz.answer)
            # if solve == serializer.data["answer"]:
            if solve == quiz.answer:
                # user경험치 및 포인트 증가
                user.exp += 100
                user.point += 100
                user.save()
                return Response({"message": "정답입니다. 100포인트를 얻습니다!"},status=status.HTTP_200_OK)
            else:
                return Response({"message": "오답입니다!"},status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

# 영화 퀴즈(OX)
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def quiz2(request):
    if request.user.is_authenticated:
        user = request.user
        if user.point < 50:
            context = {
                "question" : "포인트가 충분하지 않습니다."
            }
            return Response(context)
        if request.method == 'GET':
            quizzes = get_list_or_404(Quiz2)
            quiz = random.sample(quizzes, 1)
            serializer = Quiz2Serializer(quiz, many=True)
            # user포인트 차감
            user.point -= 50
            user.save()
            print('포인트 50 감소!')
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        ##### 아래 POST 부분은 손볼 필요성 있음 ####
        elif request.method == 'POST':
            solve = request.data.get('solve')
            quiz_id = request.data.get('quiz_id')       # post로 받아오게될 quiz2의 id를 받아냄
            
            quiz = get_object_or_404(Quiz2, pk=quiz_id)

            # if solve == serializer.data["answer"]:
            if solve == quiz.answer:
                # user경험치 및 포인트 증가
                user.exp += 100
                user.point += 100
                user.save()
                return Response({"message": "정답입니다. 100포인트를 얻습니다!"},status=status.HTTP_200_OK)
            else:
                return Response({"message": "오답입니다!"},status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_401_UNAUTHORIZED)