# from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    # 영화 데이터 주소
    # path('api/v1/', include('movies.urls')),
    path('', views.movie_list),                     # 영화 전체 목록
    path('genre/<int:genre_pk>/', views.movies_by_genre), # 장르별 영화 목록 받기
    path('<int:movie_pk>/', views.movie_detail),    # 영화 상세보기
    path('genre/', views.get_genre),                # 장르 전체 id-name
    path('like/<int:movie_pk>/', views.movie_like), # 영화 찜하기
    path('recommend/', views.recommend),            # 영화 추천방식
    path('ideal_movie/', views.ideal_movie),        # 이상영화 받기
    # path('ideal_movie/<int:movie_pk>/', views.win_ideal_movie),
    path('quiz1/', views.quiz1),                    # 퀴즈(3지선다형)
    path('quiz2/', views.quiz2),                    # 퀴즈(OX형)
    
]