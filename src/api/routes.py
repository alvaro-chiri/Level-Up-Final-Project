"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from argon2 import PasswordHasher
import os

from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS




api = Blueprint('api', __name__)

ph = PasswordHasher()

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#Get All Requests

@api.route('/user', methods=['GET'])
def get_all_users():
    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200



#---------------------------------------------------#
#Get Single Requests


@api.route('/user/<int:user_id>', methods=['GET'])
def get_single_user(user_id):
    user = User.query.filter_by(user_id=user_id).first()
    if user is None:
        return "user not found", 404
    else:
        return jsonify(user.serialize()), 200


     

     
#---------------------------------------------------#
#Post Requests
@api.route('/user', methods = ['POST'])
def create_user():
    request_body_user = request.get_json()
    new_user = User(
    firstname = request_body_user['firstname'], 
    lastname = request_body_user['lastname'],
    email=request_body_user['email'], 
    password=ph.hash(request_body_user['password']),
    zipcode=request_body_user['zipcode'],
    trainertype=request_body_user['trainertype'],
    )
    db.session.add(new_user)
    db.session.commit()
    return new_user['id'], 200

@api.route('/user/<int:user_id>', methods=['POST'])
def update_user(user_id):
    user = User.query.filter_by(id=user_id).first()
    request_body_user = request.get_json()
    
    if user is None:
        return "user not found", 404
    else:
        user.age=request_body_user["age"]
        user.education=request_body_user["education"]
        user.experience=request_body_user["experience"]
        user.aboutme=request_body_user["aboutme"]
        db.session.commit()
        return jsonify(user.serialize()), 200
#-------------------------------------------------#
#this is to create a token which will be then saved to the backend for any user that is online - Alvaro C.
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    payload = request.get_json()
    user = User.query.filter(User.email == payload['email']).first()
    if user is None:
        return 'failed-auth', 401
    try:
        ph.verify(user.password, payload['password'])
    except:
        return 'failed-auth', 401
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)
