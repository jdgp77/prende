import React from "react"
import { Link } from "gatsby"

import Layout from "../local-components/layout"
import Image from "../global-components/image"
import SEO from "../global-components/seo"

const NuevoPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default NuevoPage
