import React from "react"

import Layout from "../local-components/layout"
import SEO from "../global-components/seo"
import Detalle from "../local-components/blocks/tiendadetalle/TiendaDetalle"

const DetalleTienda = () => (
  <Layout>
    <SEO title="Detalle tienda" />
    <Detalle></Detalle>
  </Layout>
)

export default DetalleTienda
