from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import Entries
from .serializers import EntrySerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view  
from rest_framework_simplejwt.tokens import RefreshToken

class EntryCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = EntrySerializer


    def get_queryset(self):
        print("USER:",self.request.user)
        return Entries.objects.filter(owner=self.request.user)

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
        print("saved BRuhhh")

class GetContent(RetrieveAPIView):
    queryset = Entries.objects.all()
    serializer_class = EntrySerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {"message":"User created"}
            )
        return Response(serializer.error,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    username = request.headers.get("username")
    password = request.headers.get("password")
    user = authenticate(username=username, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        })

    return Response({"detail":"Invalid credentials"}, status=401)

