import React from "react"
import { Link } from "gatsby"

import Layout from "../global-components/layout"
import SEO from "../global-components/seo"
import CreateStore from "../local-components/blocks/create-store/Createstore"

const CrearTienda = () => (
  <Layout>
    <SEO title="Crear tienda" />
    <CreateStore></CreateStore>
  </Layout>
)

export default CrearTienda
