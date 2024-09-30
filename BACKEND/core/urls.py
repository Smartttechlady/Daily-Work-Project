"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from account.views import signup, login, verifyuser, createpost, allposts, singlepost  

from account import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path ('signup/', signup),
    path ('login/', login),
    path ('verifyuser/', verifyuser),
    path ('createpost/<int:id>', createpost),
    path ('singlepost/<int:id>', singlepost),
    path ('allposts/', allposts),

]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, documents_root=settings.MEDIA_ROOT)