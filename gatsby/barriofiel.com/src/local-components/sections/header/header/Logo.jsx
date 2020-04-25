import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  return <StaticQuery query={graphql`
    query {
      file(relativePath: {eq: "local-images/LogoBarrioFielFondoOscuro.png"}) {
        childImageSharp {
          fixed(width: 200, height: 117) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}
    render={data => <Img fixed={data.file.childImageSharp.fixed} /> }
    />
};
