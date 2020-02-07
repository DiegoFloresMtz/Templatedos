import React, {Component} from 'react';
import {Container, Col,Row} from 'reactstrap';
import imga1 from "../images/img/pattern.jpg";
import '../style/sect3.css';
import Plx from "react-plx";

const dParallaxData = [
  {
    start: "self",
    duration: '500px',
    properties: [
      {
        startValue: 0,
        endValue: .5,
        property: "opacity"
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 2,
        property: "blur"
      },
      {
        startValue:0,
        endValue:-200,
        property:"translateX"
      },
      {
        startValue:0,
        endValue:.5,
        property:"scaleX"
      }

    ]
  }
]

export default class Sect3 extends Component{

  render(){
    return(
      <div className="bodie">
<Container>
  <Col>
    <Row>

    <div className="posit">
      <Plx parallaxData={dParallaxData}>
      <img src={imga1}
      className="imgai"
        alt="" />
      </Plx>
    </div>

    <div className="textform">
          Cat ipsum dolor sit amet, purrr purr littel cat, little cat purr purr give me attention or face the wrath of my claws, refuse to leave cardboard box. Cat is love, cat is life meow for food, then when human fills food dish, take a few bites of food and continue meowing for licks your face. Cereal boxes make for five star accommodation lick butt, so meow loudly just to annoy owners good now the other hand, too for meow meowing chowing and wowing sit by the fire. Sit in box jump off balcony, onto stranger's head so throw down all the stuff in the kitchen poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls cough hairball on conveniently placed pants climb a tree
          </div>

    </Row>
  </Col>
</Container>
</div>
    );
  }
}
