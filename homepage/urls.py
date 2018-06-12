from django.urls import path
import homepage.views as view

urlpatterns = [
    path('', view.index),
]
