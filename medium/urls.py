from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework_jwt import views as jwt_views
from .views import IndexView


urlpatterns = [ 
    path('admin/', admin.site.urls),
    
    # auth urls
    path('api-auth-token/', jwt_views.obtain_jwt_token),
    path('api-refresh-token/', jwt_views.refresh_jwt_token),
    path('api-verify-token/', jwt_views.verify_jwt_token),

    # vue entry point
    re_path(r"^.*$", IndexView.as_view(), name="index")
]

if settings.DEBUG:
    import debug_toolbar
    
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
