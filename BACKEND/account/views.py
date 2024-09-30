from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view 
from.models import User, post
from.serializer import UserSerializer, LoginSerializer, postserializer, postimageserializer,fetchpostserializer

# Create your views here.


@api_view(['POST'])
def signup(request):

    data = request.data

    try:
        serializer = UserSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=200)
        else:
            return Response(data=serializer.errors, status=400)
        
    except BaseException as e:
        return Response(data=str(e), status= 400)
    

@api_view(['POST'])
def login(request):

    try:
       
        serializer = LoginSerializer(request.data)

        user = serializer.checkuser(serializer.data)

        if user is None:
            return Response(data={"error": "Invalid Credentials"}, status=400)
        else:
            return Response(data=user , status=200)

    except BaseException as e:
        return Response(data=str(e), status=400)
    



@api_view(["GET"])
def verifyuser(request, id):
    user = User.objects.filter(id=id).first()
    if user is None:
       return Response(data="acount does not exist", status=400)
   
    else:
       user.is_active = True
       user.save()
       return Response("verification successful", status=200)
    
            
@api_view(['POST'])
def createpost(request, id):

    try:
        user = User.objects.get(id=id)

        request.data._mutable = True

        request.data['userid'] = user.id

        conversion = postserializer(data = request.data)

        if conversion.is_valid():
            conversion.save()
            return Response(data = 'post created', status=200)
        else:
            return Response(data = conversion.errors, status=400)
    
    except BaseException as e:
        return Response(str(e), status=400)
    

@api_view(['GET'])
def allposts(request):

    allposts = post.objects.all().order_by('-id')

    conversion = fetchpostserializer(allposts, many = True)

    return Response(data=conversion.data, status=200)

@api_view(['GET'])
def singlepost(request, id):

    try:

        post = post.objects.get(id=id)

        conversion = fetchpostserializer(post)

        return Response(data=conversion.data, status=200)
    
    except BaseException as e:

        return Response(str(e), status=400)    