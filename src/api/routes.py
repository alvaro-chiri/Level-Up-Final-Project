"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
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

@api.route('/user/<int:user_id>', methods=['POST'])
def update_user(user_id):
    user = User.query.filter_by(user_id=user_id).first()
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
