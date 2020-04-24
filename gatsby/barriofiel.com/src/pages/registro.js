import React from "react"

import Layout from "../local-components/layout"
import SEO from "../global-components/seo"
import Register from "../global-components/blocks/register/Register"

const IniciarSesion = () => (
  <Layout>
    <SEO title="Registrate" />
    <Register></Register>
  </Layout>
)

export default IniciarSesion
