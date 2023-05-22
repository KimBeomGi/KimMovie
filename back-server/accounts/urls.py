# from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    # follow 주소
    # path('accounts/api/v1/', include('accounts.urls'))
    path('follow/<int:user_pk>/', views.follow),            # follow 하기
    path('unregister/', views.unregister),                  # 회원 탈퇴
    path('profile/<int:user_pk>/', views.profile),          # profile 보기
    
]