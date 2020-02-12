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
  Sect3} from "../sections"


const IndexPage = () => (
  <Layout>
    <SEO title="Template" />
    <Sect1 />
    <Sect2 alt=""/>
    <Sect3/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
