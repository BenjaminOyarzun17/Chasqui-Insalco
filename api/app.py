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
    imagen = db.Column(db.String(500), nullable=False)
    productos = db.relationship('Producto', backref='pyme', lazy=True)

    def __init__(self, nombre, tipo, ubicacion, despacho, imagen):
        self.nombre=nombre
        self.tipo = tipo
        self.ubicacion=ubicacion
        self.despacho=despacho
        self.imagen = imagen
# = Pyme("Donde Jose", "Minimercado", "Providencia" , False, "https://apollo-virginia.akamaized.net/v1/files/7os84ebvkc8q3-CO/image;s=272x0")

class Producto(db.Model):
    id = db.Column( db.Integer, primary_key=True)

    nombre = db.Column(db.String(30), nullable =False)
    descripcion = db.Column(db.String(30), nullable =False)
    precio = db.Column(db.Integer, nullable =False)
    imagen = db.Column(db.String(500), nullable=False)
    pyme_id = db.Column(db.Integer, db.ForeignKey('pyme.id'),
        nullable=False)
    


    def __init__(self, nombre, descripcion, precio, imagen, pyme_id ):
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.imagen = imagen
        self.pyme_id= pyme_id
        

# = Producto("Pepsi", "bebida 2L", 1000, "https://www.distribuidorasantiago.cl/wp-content/uploads/2018/12/639-BEBIDA-PEPSI.jpg", 1)



def obtenerProductos(listaProductos):
    lista = []
    for i in listaProductos:
        lista.append({
            "nombre":i.nombre,
            "descripcion":i.descripcion,
            "precio":i.precio,
            "imagen":i.imagen
        })
    return lista



@app.route('/pymes/<name>', methods=['GET', 'POST'])
def get_product(name):
  if request.method=="GET":
    
    pyms = Pyme.query.all()
    laPyme = None
    for i in pyms:
        if i.nombre==name:
            laPyme ={
                "nombre":i.nombre,
                "tipo":i.tipo,
                "ubicacion":i.ubicacion,
                "despacho":i.despacho,
                "imagen":i.imagen,
                "productos":obtenerProductos(i.productos)
            }
    

            break
    return jsonify(laPyme)

  if request.method =="POST" :
       return 0
    
  



@app.route('/pymes', methods = ['GET'])
def pymes():
    
    items =[]
    usuario = {"nombre": "benja", "correo":"benjaoyama@gmail.com", "direccion":"providencia"}
    pyms = Pyme.query.all()
    for i in pyms:
        items.append({
            "nombre":i.nombre,
            "tipo":i.tipo,
            "ubicacion":i.ubicacion,
            "despacho":i.despacho,
            "imagen":i.imagen
        })
    respuesta={
        "usuario":usuario,
        "pymes":items
    }

    return jsonify(respuesta)#quizas sea mejor hacer un objeto?








if __name__== '__main__':
    db.create_all()
    app.run(debug=True)




