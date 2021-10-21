from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserSerializer

# Create your views here.


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def registerAccount(request):
    try:
        data = request.data

        first_name = data['first_name']
        last_name = data['last_name']
        username = data['username']
        email = data['email']
        password = data['password']

        if not(User.objects.filter(username=username).exists()):
            user = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=email,
                password=password,
            )

            user.save()

            if User.objects.filter(username=username).exists():
                return Response(
                    {'success': 'Account Created Successfully!'},
                    status=status.HTTP_201_CREATED
                )
            else:
                return Response(
                    {'error': 'Something Went wrong when trying to Create Account'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        else:
            return Response(
                {'error': 'User with this email is already registered!'},
                status=status.HTTP_400_BAD_REQUEST
            )
    except Exception as e:
        return Response(
            {
                'error': 'Something Went wrong when trying to register',
                'exception': e.__str__()
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def getUser(request):
    try:
        user = request.user
        user = UserSerializer(user)

        return Response(
            {'user': user.data},
            status=status.HTTP_200_OK
        )
    except Exception:
        return Response(
            {'error': 'Something Went wrong when trying to Load User'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
