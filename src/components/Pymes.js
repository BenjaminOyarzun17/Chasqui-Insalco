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
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded:true,
            pymes : result.pymes
          });
          
        }
        
      )
  }
        



    render() {
      const mostrarPymes = this.state.pymes.map(
        (pyme,i) => {
          return ( 
          <Col>
            <Pyme
            key = {i}
            nombre = {pyme.nombre}
            descripcion = {pyme.descripcion}
            direccion ={ pyme.direccion}
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