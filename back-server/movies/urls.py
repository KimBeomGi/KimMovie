# from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    # 영화 데이터 주소
    # path('api/v1/', include('movies.urls')),
    path('', views.movie_list),
    path('<int:movie_pk>/', views.movie_detail),
    path('genre/', views.get_genre),
    path('like/<int:movie_pk>/', views.movie_like),
    path('recommend/', views.recommend),
    path('ideal_movie/', views.ideal_movie),
    # path('ideal_movie/<int:movie_pk>/', views.win_ideal_movie),
    path('quiz1/', views.quiz1),
    path('quiz2/', views.quiz2),
    
]