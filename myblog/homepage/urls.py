from django.urls import path
import homepage.views as view


urlpatterns = [
    path('', view.IndexView.as_view(), name="index"),
    path('blog', view.BlogView.as_view(), name="blog"),
    path('timeline', view.TimelineView.as_view(), name="timeline"),
]
