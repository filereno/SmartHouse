from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
    
# class CamView(TemplateView):
# 	template_name = "index.html"

class HomeView(TemplateView):
	template_name = "index-home.html"

class CamView(TemplateView):
	template_name = "index-cam.html"