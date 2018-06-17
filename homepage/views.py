from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"


class BlogView(TemplateView):
    template_name = "blog.html"


class TimelineView(TemplateView):
    template_name = "timeline.html"
