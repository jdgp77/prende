import React from "react"
import BuscarBlock from '../global-components/blocks/buscar/BuscarBlock'

import Layout from "../local-components/layout"
import SEO from "../global-components/seo"

const buscar = () => (
  <Layout>
    <SEO title="Buscar" />
    <BuscarBlock></BuscarBlock>
  </Layout>
)

export default buscar
