# here  we are configuring the root URlconfig in mysite project to include the URL conf defined in polls.uls
# to do this, add an import for django.urls.include and insert the include()
from django.contrib import admin
from django.urls import include,path
from rest_framework_simplejwt.views import TokenObtainPairView
urlpatterns = [
    path("entries_back_end/", include("entries_back_end.urls")),
    path('admin/', admin.site.urls),
    path("api/v1/auth/",include("dj_rest_auth.urls")),
    path("api/v1/auth/registration/",include("dj_rest_auth.registration.urls")),
    path("api/token/", TokenObtainPairView.as_view()),
]
