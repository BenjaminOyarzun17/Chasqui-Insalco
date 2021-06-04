from flask import Flask, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
db = SQLAlchemy(app)

class users(db.Model):
    _id= db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    lastName = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    direccion = db.Column(db.String(100))
    def __init__(self, name, email, direccion):
        self.name = name
        self.lastName = lastName
        self.email = email
        self.password= password 
        self.direccion = direccion


 
@app.route('/pymes',methods= ['GET'])
def datosPymes():
    return {
        'pymes':[
            {'nombre':'donde Carlos',
            'direccion':'providencia',
            'descripcion':'panaderia',
            'link':'/pymes/dondeCarlos'},
            {'nombre':'donde Pepe',
            'direccion':'las condes',
            'descripcion':'lechero',
            'link':'/pymes/dondePepe'},
            {'nombre':'donde Sergio',
            'direccion':'maipu',
            'descripcion':'fiambres',
            'link':'/pymes/dondeSergio'},
            {'nombre':'donde Obi',
            'direccion':'macul',
            'descripcion':'ferreteria',
            'link':'/pymes/dondeObi'}
        ]
}


@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      
      return redirect(url_for('success',name = request))
  
@app.route('/register',methods = ['POST', 'GET'])
def register():
   if request.method == 'POST':
      data=request.form
      nombre = data['nombre']

      return redirect(url_for('success',name = data))
  





if __name__== '__main__':
    db.create_all()
    app.run(debug=True)



