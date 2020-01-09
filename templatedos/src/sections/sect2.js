import React from "react";
import {Container, Col, Row, Button, Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck} from 'reactstrap';
import dots from "../images/img/dots.png"
import '../style/sect2.css'



export default ()=>
  <Container>
    <Container>
      <Row>
        <Col className="mt-5 titlee">
          <h1 className="font-weight-bold">
            Precios
          </h1>
        </Col>
      </Row>

      <Row>
        <Col className="sub">
          <p>
            Tenemos un plan pensando en ti.
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
                    <CardTitle>Fit</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>
Plan pensado para personas sin objetivos fijos ni restricciones alimenticias.<br/><br/>
<font className="font-weight-bold">
· Objetivos generales<br/><br/>
· Mantener un estado sano<br/><br/>
· Disfrutar de una rica alimentación<br/><br/>
· Conservar mi peso actual<br/><br/>
</font>
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
                    <CardTitle>Advance</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>
Plan pensado para personas con un objetivo fijo, ya sea una competencia un peso determinado o simplemente un objetivo personal.<br/><br/>
<font className="font-weight-bold">
· Objetivos específicos<br/><br/>
· Lograr una meta<br/><br/>
· Una competencia<br/><br/>
</font>
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
                    <CardTitle>Complete</CardTitle>
                      <hr className="lines" width="80%" align="center"/>
                    <CardSubtitle>
Plan con muchas especificaciones, ideal para personas con una alimentación con restricciones o gustos específicos.<br/><br/>
<font className="font-weight-bold">
· Alimentación especial<br/><br/>
· Nutriologa 24/7<br/><br/>
· Salud<br/><br/>
</font>
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
  </Container>
