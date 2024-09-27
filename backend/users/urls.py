from django.urls import path
from .views import RegisterView, RetrieveUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),  # Add trailing slash
    path('me/', RetrieveUserView.as_view(), name='me'),  # Add trailing slash
]
