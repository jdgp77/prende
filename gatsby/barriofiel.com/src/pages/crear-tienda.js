import React from "react"

import Layout from "../local-components/layout"
import SEO from "../global-components/seo"
import CreateStore from "../local-components/blocks/create-store/Createstore"

const CrearTienda = () => (
  <Layout>
    <SEO title="Crear tienda" />
    <CreateStore></CreateStore>
  </Layout>
)

export default CrearTienda
