import React from "react"
import { Link } from "gatsby"

import Layout from "../global-components/layout"
import SEO from "../global-components/seo"
import Login from "../local-components/blocks/login/Login"

const IniciarSesion = () => (
  <Layout>
    <SEO title="Iniciar sesión" />
    <Login></Login>
  </Layout>
)

export default IniciarSesion
