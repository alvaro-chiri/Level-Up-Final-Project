"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import os

from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS




api = Blueprint('api', __name__)



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
    firstname = request_body_user["firstname"], 
    lastname = request_body_user["lastname"],
    email=request_body_user["email"], 
    password=request_body_user["password"],
    zipcode=request_body_user["zipcode"],
    trainertype=request_body_user["trainertype"],
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(request_body_user), 200

#-------------------------------------------------#
#this is to create a token which will be then saved to the backend for any user that is online - Alvaro C.
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)