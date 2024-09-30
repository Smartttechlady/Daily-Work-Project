from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import CustomUserManager

# Create your models here.


class User(AbstractUser):
    username = None
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=11, unique=True)
    password = models.CharField(max_length=225)
    is_active = models.BooleanField(default=False)
    nin = models.CharField(max_length=11)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    photo = models.ImageField(upload_to="profile")
    about = models.TextField(blank=True)
    hiring = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()




class portfolio(models.Model):
    user =models.ForeignKey(User, related_name='portfolio', on_delete=models.CASCADE)
    acct_no = models.CharField(max_length=20)
    next_of_kin_name = models.CharField(max_length=20)
    next_of_kin_acct = models.CharField(max_length=20)
    minPrice = models.DecimalField(max_digits=7, decimal_places=2)
    maxPrice = models.DecimalField(max_digits=7, decimal_places=2)

class portfolioImage(models.Model):
    portfolio = models.ForeignKey(portfolio, related_name='portimages', on_delete=models.CASCADE)



class post(models.Model):  
    user = models.ForeignKey(User, related_name='post', on_delete=models.PROTECT)
    description = models.TextField()
    minPrice = models.DecimalField(max_digits=7, decimal_places=2)

class postimage(models.Model):
    image = models.ImageField(upload_to="post")
    post = models.ForeignKey(post, on_delete=models.CASCADE, related_name="images")
