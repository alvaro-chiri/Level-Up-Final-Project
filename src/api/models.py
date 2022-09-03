from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine


db = SQLAlchemy()



class User(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    firstname = db.Column(db.String(40), unique=True, nullable=False)
    lastname = db.Column(db.String(40), unique=True, nullable=False)
    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(12), unique=False, nullable=False)
    zipcode = db.Column(db.String(40), unique=True, nullable=False)
    trainertype = db.Column(db.String(40), unique=True, nullable=False)
    is_active = db.Column(Boolean(), unique=False, nullable=True)



    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "zipcode": self.zipcode,
            "trainertype": self.trainertype,
        }