import React from "react";
import {Container, Col, Row, Button} from 'reactstrap';
import img_1 from "../images/img/plane.png";
import img_2 from "../images/img/salad.png";
import "../style/sect1.css"

const Sect1 =() => (
<div className="fulle">
  <Container >
    <Row >
      <Col sm={6} xs={12}>

     <h1 className="titulo">
      Pee on walls
     </h1><br/>
     <h4 className="subs">
     It smells like breakfast poop on grasses scratch the box
     </h4>

     <Button outline color="light" className="font-weight-bold btnstyle"  href="https://api.whatsapp.com/send?phone=522471279045&text=Hola,%20quiero%20agendar%20una%20consulta%20en%20NutriAndLove%20con%20la%20Doctora%20Blanca%20Vargas">¡Regístrate Ahora!</Button>{' '}

      </Col>
      <Col sm={6} xs={12}>
        <img src={img_1} className="imgst_1" alt="" />
        <img src={img_2} className="imgst_2" alt="" />
        <br/>
        <br/>

      </Col>
    </Row>

  </Container>
</div>
)

export default Sect1
