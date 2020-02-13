import React from "react";
import {Container, Col, Row, Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck} from 'reactstrap';
import dots from "../images/img/dots.png";
import '../style/sect2.css';
import Plx from "react-plx";

const ParallaxDataf=[
  {
    start:"self",
    duration:"700px",
    properties:[
      {
        startOffset:0,
        endOffset:20,
        easing:(0.175, 0.885, 0.32, 1.275),
      },
      {
        startValue:0,
        endValue:1,
      property:"opacity"
    },
    {
      startValue:200,
      endValue:0,
    property:"translateY"
  },
]
},
  {
    start:"1000px",
    duration:"600px",
    properties:[
      {
          startValue: 1,
          endValue:0,
          property:"opacity"
      },
      {
        startValue:.9,
        endValue:0,
        property:""
      },
      {startValue:0,
      endValue:-600,
    property:"translateX"}
      ]
  }
]


export default ()=>
  <Container>
  <Plx parallaxData={ParallaxDataf}>
    <Container>
      <Row>
        <Col className="mt-5 titlee">
          <h1 className="font-weight-bold">
            Push your water glass on the floor
          </h1>
        </Col>
      </Row>

      <Row>
        <Col className="sub">
          <p>
            There's a forty year old lady there let us feast mouse
          </p>
        </Col>
      </Row>
<br/><br/><br/>

      <Row>
        <Col >
          <div>
          <CardDeck>
                <Card className="card-body">
                  <CardBody>
                    <CardTitle>Loren Ipsum</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>Cat ipsum dolor sit amet, cats are the world and what the heck just happened, something feels fishy so munch on tasty moths claw drapes. The door is opening! how exciting oh, it's you, meh<br/><br/>
</CardSubtitle>
                    <CardText className="font-weight-bold">$999 mxn

                    </CardText>
                    <CardText>
                        Mensual
                    </CardText>
                    <Button className="butn"   href="https://api.whatsapp.com/send?phone=522471279045&text=Hola,%20quiero%20agendar%20una%20consulta%20en%20NutriAndLove%20con%20la%20Doctora%20Blanca%20Vargas">¡Lo quiero!</Button>
                  </CardBody>
                </Card>

                <Card className="card-body">
                  <CardBody >
                    <CardTitle>Loren Ipsum</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>
Cat ipsum dolor sit amet, cats are the world and what the heck just happened, something feels fishy so munch on tasty moths claw drapes. The door is opening! how exciting oh, it's you, meh<br/><br/>
</CardSubtitle>
                    <CardText className="font-weight-bold">$1,499 mxn</CardText>
                    <CardText>
                        Mensual
                    </CardText><br/>
                    <Button className="butn"   href="https://api.whatsapp.com/send?phone=522471279045&text=Hola,%20quiero%20agendar%20una%20consulta%20en%20NutriAndLove%20con%20la%20Doctora%20Blanca%20Vargas">¡Lo quiero!</Button>
                  </CardBody>
                </Card>

                <Card className="card-body">
                  <CardBody >
                    <CardTitle>Loren ipsum</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>
Cat ipsum dolor sit amet, cats are the world and what the heck just happened, something feels fishy so munch on tasty moths claw drapes. The door is opening! how exciting oh, it's you, meh<br/><br/>
</CardSubtitle>
                    <CardText className="font-weight-bold">$1,699 mxn </CardText>
                    <CardText>
                        Mensual
                    </CardText><br/>
                    <Button className="butn"   href="https://api.whatsapp.com/send?phone=522471279045&text=Hola,%20quiero%20agendar%20una%20consulta%20en%20NutriAndLove%20con%20la%20Doctora%20Blanca%20Vargas">¡Lo quiero!</Button>
                  </CardBody>
                </Card>
              </CardDeck>
          </div>
  <img src={dots} className="imgT" alt="" />
<img src={dots} className="imgL" alt="" />
</Col>
      </Row>
    </Container><br/><br/>
    </Plx>
  </Container>
