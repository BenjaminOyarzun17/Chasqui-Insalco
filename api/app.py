from flask import Flask, redirect, url_for, request,jsonify, json
from flask.templating import render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)


class Pyme(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    nombre = db.Column(db.String(20), nullable= False)
    tipo = db.Column(db.String(20), nullable= False)
    ubicacion = db.Column(db.String(20), nullable=False)
    despacho = db.Column(db.Boolean, nullable=False)
    def __init__(self, nombre, tipo, ubicacion, despacho):
        self.nombre=nombre
        self.tipo = tipo
        self.ubicacion=ubicacion
        self.despacho=despacho

# u1= Pyme("donde Sergio", "carniceria", "providencia" , False)


@app.route('/dashboard', methods = ['GET'])
def pymes():
    items =  [
    { "id": "1", "name": "Apples",  "price": "2" },{ "id": "2", "name": "Peaches", "price": "5" }
  ] 
    items =[]
    pyms = Pyme.query.all()
    for i in pyms:
        items.append({
            "nombre":i.nombre,
            "tipo":i.tipo,
            "ubicacion":i.ubicacion,
            "despacho":i.despacho
        })

    return jsonify(items)








if __name__== '__main__':
    db.create_all()
    app.run(debug=True)



