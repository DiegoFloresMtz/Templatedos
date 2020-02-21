import React from "react";
import {Container, Col, Row, Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck} from 'reactstrap';
import dots from "../images/img/dots.png";
import '../style/sect3.css';
import Plx from "react-plx";
import ScrollAnimation from 'react-animate-on-scroll';

const ParallaxDataf=[
  {
    start:"self",
    duration:"500px",
    properties:[
      {
        startValue:0,
        endValue:1,
      property:"opacity"
    },
    {
      startValue:400,
      endValue:0,
    property:"translateY"
  },
]
}
]

const ParallaxDataE=[
  {
    start:"self",
    duration:"500px",
    properties:[
      {
        startValue:0,
        endValue:1,
      property:"opacity"
    },
    {
      startValue:0,
      endValue:0,
    property:"blur"
  },
  {
    startValue:1,
    endValue:1.2,
    property:"scaleZ"
  }
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

          <ScrollAnimation animateIn="flipInX"
            animateOut="bounceOutUp">
            <Plx parallaxData={ParallaxDataE}>
              <CardDeck>
                <Card className="card-body" sm={4} xs={12}>
                  <CardBody>
                    <CardTitle>Loren Ipsum</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>Cat ipsum dolor sit amet, cats are the world and what the heck just happened, something feels fishy so munch on tasty moths claw drapes. The door is opening! how exciting oh, it's you, meh<br/><br/>
</CardSubtitle>
                    <CardText className="font-weight-bold">$999 mxn

                    </CardText>
                    <CardText>
                        Mensual
                    </CardText><br/>
                    <Button className="butn"   href="">¡Lo quiero!</Button>
                  </CardBody>
                </Card>

                <Card className="card-body" sm={4} xs={12}>
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
                    <Button className="butn"   href="">¡Lo quiero!</Button>
                  </CardBody>
                </Card>

                <Card className="card-body" sm={4} xs={12}>
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
                    <Button className="butn"   href="">¡Lo quiero!</Button>
                  </CardBody>
                </Card>
              </CardDeck>
            </Plx>
</ScrollAnimation>
          </div>
  <img src={dots} className="imgT" alt="" />
<img src={dots} className="imgL" alt="" />
</Col>
      </Row>
    </Container><br/><br/>
    </Plx>
  </Container>
