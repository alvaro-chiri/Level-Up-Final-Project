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
    firstname = db.Column(db.String(40), unique=False, nullable=False)
    lastname = db.Column(db.String(40), unique=False, nullable=False)
    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(150), unique=False, nullable=False)
    zipcode = db.Column(db.String(40), unique=False, nullable=False)
    trainertype = db.Column(db.String(40), unique=False, nullable=False)
    age = db.Column(db.String(), unique=False, nullable=True)
    education = db.Column(db.String(), unique=False, nullable=True)
    experience = db.Column(db.String(), unique=False, nullable=True)
    aboutme = db.Column(db.String(), unique=False, nullable=True)
    is_active = db.Column(Boolean(), unique=False, nullable=True)
    daysavailable = db.Column(db.String(), unique=False, nullable=True)
    timesavailable = db.Column(db.String(), unique=False, nullable=True)
    



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
            "age": self.age,
            "education": self.education,
            "experience": self.experience,
            "about": self.aboutme,
            "daysavailable": self.daysavailable,
            "timesavailable": self.timesavailable,
        }

