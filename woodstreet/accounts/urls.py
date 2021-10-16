from django.urls import path
from django.conf.urls import include
from .views import registerAccount, getUser

urlpatterns = [
    path('register/', registerAccount),
    path('user/', getUser)
]
