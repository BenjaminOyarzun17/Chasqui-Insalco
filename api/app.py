from flask import Flask

app = Flask(__name__)
 
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



@app.route('/register',methods= ['POST'])
def registro():
    return 0







if __name__== '__main__':
    app.run(debug=True)



