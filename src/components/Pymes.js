import React ,{useEffect} from 'react';
import {Col, Row, Container, Card,Button} from 'react-bootstrap';
import Pyme from './Pyme.js';

class Pymes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      pymes: []
    };
  }
  componentDidMount() {
    fetch("/pymes")
      .then(response=>{
        if (response.ok){
          return response.json()
        }
      }).then(data=> {
        console.log(data);
        this.setState({
          isLoaded : true,
          pymes : data
        })
      })
  }
        



    render() {
      const mostrarPymes = this.state.pymes.map(
        (pyme,i) => {
          return ( 
          
          
          
          <Col style={{marginTop:'5px'}}>
            <Pyme 
            
            key = {i}
            nombre = {pyme.name}
            descripcion = {pyme.desc}
            direccion ={ pyme.dir}
            link = {pyme.link}
            >

            </Pyme>
          </Col>
          
          )}
      );
      
      
      
      if (this.state.isLoaded){
      return (
      <Container>
        <h1>Pymes</h1>
          <Container style={{textAlign:'right'}}>
          <form action="#" method='POST' >
                    <label style={{margin :'5px'}}>Buscar Pymes por nombre</label>
                    <input style={{margin :'5px'}} type = 'text' placeholder='ingresar nombre de la Pyme' name='name' defaultValue=''/>
                    <input style={{margin :'5px'}} type='submit' value="Buscar"/>
          </form> 
          <form action="#" method='POST'>
                    <label style={{margin :'5px'}}>Buscar Pymes por comuna</label>
                    <input style={{margin :'5px'}} type = 'text' placeholder='ingresar comuna de la Pyme' name='dir' defaultValue=''/>
                    <input style={{margin :'5px'}} type='submit' value="Buscar"/>
          </form> 

          </Container>


        <Container>
          <Row>
            {mostrarPymes}
          </Row>
        </Container>
      </Container>
      
      
      
      )}else{
        return(<h1>loading...</h1>)
      }
    }
  }

export default Pymes;