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
   #precioMedio = db.Column(db.Integer, nullable=True)
    productos = db.relationship('Producto', backref='pyme', lazy=True)

    def __init__(self, nombre, tipo, ubicacion, despacho):
        self.nombre=nombre
        self.tipo = tipo
        self.ubicacion=ubicacion
        self.despacho=despacho
# = Pyme("Donde Jose", "Peluquero", "La Legua", False)

class Producto(db.Model):
    id = db.Column( db.Integer, primary_key=True)

    nombre = db.Column(db.String(30), nullable =False)
    descripcion = db.Column(db.String(30), nullable =False)
    precio = db.Column(db.Integer, nullable =False)
    pyme_id = db.Column(db.Integer, db.ForeignKey('pyme.id'),
        nullable=False)
    def __init__(self, nombre, descripcion, precio, pyme_id):
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.pyme_id= pyme_id





def obtenerProductos(listaProductos):
    lista = []
    for i in listaProductos:
        lista.append({
            "nombre":i.nombre,
            "descripcion":i.descripcion,
            "precio":i.precio
        })
    return lista



@app.route('/dashboard/<name>')
def get_product(name):
  pyms = Pyme.query.all()
  laPyme = None
  for i in pyms:
      if i.nombre==name:
          laPyme ={
            "nombre":i.nombre,
            "tipo":i.tipo,
            "ubicacion":i.ubicacion,
            "despacho":i.despacho,
            "productos":obtenerProductos(i.productos)
          }
  

          break
  
  
  
  return jsonify(laPyme)



@app.route('/dashboard', methods = ['GET'])
def pymes():
    
    items =[]
    usuario = {"nombre": "benja", "correo":"benjaoyama@gmail.com", "direccion":"providencia"}
    pyms = Pyme.query.all()
    for i in pyms:
        items.append({
            "nombre":i.nombre,
            "tipo":i.tipo,
            "ubicacion":i.ubicacion,
            "despacho":i.despacho
        })
    respuesta={
        "usuario":usuario,
        "pymes":items
    }

    return jsonify(respuesta)#quizas sea mejor hacer un objeto?








if __name__== '__main__':
    db.create_all()
    app.run(debug=True)




