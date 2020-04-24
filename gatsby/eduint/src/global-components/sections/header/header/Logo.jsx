import React from 'react';
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default (props) => {
  console.log(props);
  return <StaticQuery query={graphql`
    query {
      file(relativePath: {eq: "global-images/Logo.png"}) {
        childImageSharp {
          fixed(width: 170, height: 46) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}
    render={data => <Img fixed={data.file.childImageSharp.fixed} /> }
    />
};
