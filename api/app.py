from enum import unique
from flask import Flask, redirect, url_for, request,jsonify, json
from flask.templating import render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, login_required, UserMixin, logout_user,current_user
from flask_bcrypt import Bcrypt

import sys


app = Flask(__name__)
app.config['SECRET_KEY']='123456'
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager= LoginManager()
login_manager.init_app(app)
login_manager.login_view="login"


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))




class User(db.Model, UserMixin):
    id = db.Column( db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable= False)
    email = db.Column(db.String(20), nullable= False,unique=True)
    password = db.Column(db.String(20), nullable=False)
    
    #pymes = db.relationship('Pyme', backref='author', lazy=True)
    
    def __init__(self, username, password, email):
        self.username =username
        self.password =password
        self.email = email

        
#u1 = User("benja","123456","benjaoyama@gmail.com")





@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/success/<username>')
def success(username):
   return 'welcome %s' % username

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
    data=request.form
    

    usuario = User.query.filter_by(username=data["username"]).first()
    if usuario:
        #if bcrypt.check_password_hash(usuario['password']):
        login_user(usuario)
        return redirect(url_for('dashboard'))



    return redirect(url_for('dashboard'))
    
@app.route('/dashboard', methods=['GET','POST'])
def dashboard():
    return redirect(url_for('/dashboard'))



@app.route('/register',methods = ['POST', 'GET'])
def register():
    if request.method == 'POST':
        data=request.form
        hashed_pwd= bcrypt.generate_password_hash(data['password'])
        new_user = User(username=data['username'],
                        email = data['email'],
                        password= hashed_pwd
                        )
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('/login'))
  





if __name__== '__main__':
    db.create_all()
    app.run(debug=True)



