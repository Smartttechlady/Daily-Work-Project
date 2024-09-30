from rest_framework import serializers
from .models import User, post, postimage
from django.contrib.auth import authenticate
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class UserSerializer(serializers.ModelSerializer):  
    class Meta:
        model = User
        # excludes = ['profile']
        fields = '__all__'

    def create(self, data):
        user= User.objects.create_user(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'], 
            password= data['password'],
            photo=data['photo'],
            address=data['address'],
            nin=data['nin'], 
            about=data['about'],
            phone_number=data['phone_number'],  
        )

        user.save() 

            
        stringrep = render_to_string("verification.html", {
        "name":data["email"], 
        "verification_link": f"http://localhost:3000/verifyuser/{user.id}"
    })
    
        striphtml = strip_tags(stringrep)
    
        theemail = EmailMultiAlternatives(
            subject= "Verification",
            body= striphtml,
            from_email="test@test.com",
            to= [data["email"]] 
        )
    
        theemail.attach_alternative(stringrep, "text/html")
    
        theemail.send()   

        return user      

       
    

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def checkuser(self, data):
        user = authenticate(email = data['email'], password = data['password'])

        if user is None:
            return None
        else:
            id = (getattr(user, 'id'))

            return id

class postimageserializer(serializers.ModelSerializer):
    class Meta:
        fields = ['image']
        models = postimage

class fetchpostserializer(serializers.ModelSerializer):

    images = postimageserializer(many=True)

    class Meta:
        fields = ['images', 'user', 'description', 'minPrice']
        model = post
        depth = 1

class postserializer(serializers.ModelSerializer):

    images = serializers.ListField(child=serializers.ImageField(), allow_empty=True)
    description = serializers.CharField()
    userid = serializers.IntegerField()
    minPprice = serializers.DecimalField(max_digits=7, decimal_places=2) 

    class Meta:
        fields = ['userid', 'minPprice', 'description', 'images']
        model = post

    def create(self, data):

        images = data.get('images')

        user = User.objects.get(id=data['userid'])

        newpost = post.objects.create(
            user=user,
            description=data['description'],
            minPrice=data['minPrice'],
        )

        if len(images) > 0:

            for img in images:
                postimage.objects.create(
                    image=img,
                    post=newpost,
                )
        
        return data