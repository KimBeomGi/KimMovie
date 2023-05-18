from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import ReviewListSerializer, ReviewSerializer, CommentSerializer, AnonyarticleListSerializer, AnonyarticleSerializer, AnonycommentSerializer
from .models import Review, Comment, Anonyarticle, Anonycomment

# Create your views here.

# 영화 리뷰 게시글 및 댓글

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def review_list(request):
    if request.method == 'GET':
        # articles = Article.objects.all()
        reviews = get_list_or_404(Review)
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # 게시글 생성으로 사용자의 exp를 100 증가 시키기
            user = request.user
            user.exp += 100
            user.save()
            print('경험치 100 증가!')
            serializer.save(user=request.user)            
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def review_detail(request, review_pk):
    # article = Article.objects.get(pk=article_pk)
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == 'GET':
        serializer = ReviewSerializer(review)
        print(serializer.data)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_list(request):
    if request.method == 'GET':
        # comments = Comment.objects.all()
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticated])
def comment_detail(request, comment_pk):
    # comment = Comment.objects.get(pk=comment_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_create(request, review_pk):
    # article = Article.objects.get(pk=article_pk)
    review = get_object_or_404(Review, pk=review_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        # 댓글 생성으로 사용자의 exp를 100 증가 시키기
        user = request.user
        user.exp += 100
        user.save()
        print('경험치 100 증가!')
        serializer.save(review=review, user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    
def review_like(request, review_pk):
    pass


####################################################################################
# 익명 게시글 및 리뷰

@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def anonyarticle_list(request):
    if request.method == 'GET':
        # articles = Article.objects.all()
        anonyarticle = get_list_or_404(Anonyarticle)
        serializer = AnonyarticleListSerializer(anonyarticle, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AnonyarticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            # serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def anonyarticle_detail(request, anonyarticle_pk):
    # article = Article.objects.get(pk=article_pk)
    anonyarticle = get_object_or_404(Anonyarticle, pk=anonyarticle_pk)

    if request.method == 'GET':
        serializer = AnonyarticleSerializer(anonyarticle)
        print(serializer.data)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        anonyarticle.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        # anonyarticle의 비밀번호가 입력하는 비밀번호와 같을때만 작동하게 하기!
        password = request.data.get('password')
        if password and anonyarticle.password == password:
            serializer = AnonyarticleSerializer(anonyarticle, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def anonycomment_list(request):
    if request.method == 'GET':
        # comments = Comment.objects.all()
        anonycomments = get_list_or_404(Anonycomment)
        serializer = AnonycommentSerializer(anonycomments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE', 'PUT'])
def anonycomment_detail(request, anonycomment_pk):
    # comment = Comment.objects.get(pk=comment_pk)
    anonycomment = get_object_or_404(Anonycomment, pk=anonycomment_pk)

    if request.method == 'GET':
        serializer = AnonycommentSerializer(anonycomment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        anonycomment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        # anonycomment의 비밀번호가 입력하는 비밀번호와 같을때만 작동하게 하기!
        password = request.data.get('password')
        if password and anonycomment.password == password:
            serializer = AnonycommentSerializer(anonycomment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def anonycomment_create(request, anonyarticle_pk):
    # article = Article.objects.get(pk=article_pk)    
    anonyarticle = get_object_or_404(Anonyarticle, pk=anonyarticle_pk)

    if request.method == 'POST':
        serializer = AnonycommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(anonyarticle=anonyarticle)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)