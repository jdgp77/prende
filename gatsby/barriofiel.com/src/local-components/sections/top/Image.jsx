import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  return <StaticQuery query={graphql`
    query {
      file(relativePath: {eq: "local-images/PresentaElProyecto.png"}) {
        childImageSharp {
          fixed(width: 1115, height: 177) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}
    render={data => <Img className="p-top-banner-img" fixed={data.file.childImageSharp.fixed} /> }
    />
};
