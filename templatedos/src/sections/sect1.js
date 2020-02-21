import React from "react";
import {Container, Col, Row, Button} from 'reactstrap';
import img_1 from "../images/img/plane.png";
import img_2 from "../images/img/salad.png";
import "../style/sect1.css";
import Plx from "react-plx";
import ScrollAnimation from 'react-animate-on-scroll';


const ParallaxDataI=[
  {
    start:"200px",
    duration:"600px",
    properties:[
      {
          startValue: 1,
          endValue:0,
          property:"opacity"
      },
      {
        startValue:1,
        endValue:0,
        property:"scale"
      },
      {startValue:0,
      endValue:-100,
    property:"translateY"}
      ]
  }
]


const Sect1 =() => (
<div className="fulle">
  <ScrollAnimation animateIn="bounceIn"
    animateOut="bounceOut">
  <Plx parallaxData={ParallaxDataI}>
  <Container >
    <Row >
      <Col sm={6} xs={12}>

     <h1 className="titulo">
      Pee on walls(El nombre de tu marca)
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
  </Plx>
    </ScrollAnimation>
    <br/>
    <br/>    <br/>
</div>
)

export default Sect1
