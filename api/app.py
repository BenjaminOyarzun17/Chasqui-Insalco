from flask import Flask, redirect, url_for, request,jsonify, json
from flask.templating import render_template
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config['SECRET_KEY']='123456'
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)


class Pyme(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    nombre = db.Column(db.String(20), nullable= False)
    tipo = db.Column(db.String(20), nullable= False)
    ubicacion = db.Column(db.String(20), nullable=False)
    despacho = db.Column(db.Boolean, nullable=False)
    def __init__(self, nombre, tipo, despacho):
        self.nombre =nombre
        self.tipo =tipo
        self.despacho = despacho


app.route('/dashboard', methods = ['GET'])
def pymes():
    if request.method== 'GET':
        datos = db.query.all()
        return datos

 
@app.route('/dashboard', methods=['GET','POST'])
def dashboard():
    return redirect(url_for('/dashboard'))







if __name__== '__main__':
    db.create_all()
    app.run(debug=True)



