import React from "react"

import Layout from "../global-components/layout"
import SEO from "../global-components/seo"
import RecoverPassword from "../local-components/blocks/recover-password/Recoverpassword"

const RecuperarContrasena = () => (
  <Layout>
    <SEO title="Iniciar sesión" />
    <RecoverPassword></RecoverPassword>
  </Layout>
)

export default RecuperarContrasena
