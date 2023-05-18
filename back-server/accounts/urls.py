# from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    # follow 주소
    # path('accounts/api/v1/', include('accounts.urls'))
    path('follow/<int:user_pk>/', views.follow),
    
]