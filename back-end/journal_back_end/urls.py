# here  we are configuring the root URlconfig in mysite project to include the URL conf defined in polls.uls
# to do this, add an import for django.urls.include and insert the include()
from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path("entries_back_end/", include("entries_back_end.urls")),
    path('admin/', admin.site.urls),
]
