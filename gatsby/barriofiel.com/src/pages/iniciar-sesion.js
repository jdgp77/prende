import React from "react"

import Layout from "../local-components/layout"
import SEO from "../global-components/seo"
import Login from "../global-components/blocks/login/Login"

const IniciarSesion = () => (
  <Layout>
    <SEO title="Iniciar sesión" />
    <Login></Login>
  </Layout>
)

export default IniciarSesion
