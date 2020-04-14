import React from "react"
import { Link } from "gatsby"
import BuscarBlock from '../global-components/blocks/buscar/BuscarBlock'

import Layout from "../global-components/layout"
import Image from "../global-components/image"
import SEO from "../global-components/seo"

const buscar = () => (
  <Layout>
    <SEO title="Buscar" />
    <BuscarBlock></BuscarBlock>
  </Layout>
)

export default buscar
