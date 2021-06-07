from flask import Flask, redirect, url_for, request,jsonify, json
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)






class User(db.Model):
    id = db.Column( db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    lastName = db.Column(db.String(100))
    email = db.Column(db.String(100),nullable=False)
    password = db.Column(db.String(100))
    direccion = db.Column(db.String(100))
    pymes = db.relationship('Pyme', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.name}','{self.email}')"
    def __init__(self, name, lastName, email, password, direccion):
        self.name =name
        self.lastName =lastName
        self.email =email
        self.password =password
        self.direccion =direccion

#User("benja","oyarzun","benjaoyama@gmail.com","123456", "provi")
#User("a","b","aaa@gmail.com","123456", "prdfasfovi")
#User("adasf","bdfs","adfsdaa@gmail.com","1234dfsd56", "prdfas23fovi")
#User("fse","fdsf","addddaa@gmail.com","fsadfe", "uwuawa")
#db.session.add

class Pyme(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    name= db.Column(db.String(100), nullable= False)
    desc= db.Column(db.String(100), nullable= False)
    dir = db.Column(db.String(100), nullable= False)
    owner = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    
    def __init__(self, name, desc, dir,owner):
        self.name = name
        self.desc= desc
        self.dir = dir
        self.owner = owner

#Pyme("donde benja", "panaderia", "providencia", u1.id)
#Pyme("donde Pablo", "pasteleria", "las condes", u2.id)
#Pyme("donde Jose", "ferreteria", "la cisterna", u3.id)
#Pyme("donde Ignacio", "verdureria", "la granja", u4.id)
#db.session.add


def Pyme_serializer(pyme):
    return {
        'id':pyme.id,
        'name':pyme.name,
        'des':pyme.desc,
        'dir':pyme.dir
    }


@app.route('/pymes',methods= ['GET','POST'])
def datosPymes():
    if request.method=='POST':
        print(type(request))
        nombre = request.form['name']
        pymes = Pyme.query.all()
        render = []
        for pyme in pymes:
            if pyme.name== str(nombre):
                render.append(pyme)
        
        return jsonify([*map(Pyme_serializer, render)])
        
        


    
    else:
        print('ok')
        pymes = Pyme.query.all()
        return jsonify([*map(Pyme_serializer, pymes)])

@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
     
    return redirect(url_for('/pymes'))
      
@app.route('/register',methods = ['POST', 'GET'])
def register():
    if request.method == 'POST':
        data=request.form
        usuario = User(name=data['name'], 
                        lastName= data['lastName'],
                        email = data['email'],
                        password = data['password'], 
                        direccion = data['direccion'])
        db.session.add(usuario)
        db.session.commit()
        return redirect(url_for('success',name = data['name']))
  





if __name__== '__main__':
    db.create_all()
    app.run(debug=True)



