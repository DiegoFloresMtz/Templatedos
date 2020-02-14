import React from "react";
import { Link } from "gatsby";
import
{
  Layout,
  SEO,
  }
from "../components"
import {
  Sect1,
  Sect2,
  Sect3,
  Sect4} from "../sections"
  import ScrollAnimation from 'react-animate-on-scroll';


const IndexPage = () => (
  <Layout>
    <SEO title="Template" />
    <Sect1 />
    <ScrollAnimation animateIn="tada">
    <Sect4/>
    </ScrollAnimation>
    <Sect2 alt=""/>
    <Sect3/>

  </Layout>
)

export default IndexPage
