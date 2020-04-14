/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using 

const axios = require(`axios`);
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

  let url = `http://contenta/api/pages`;

  let result;
  try {
    result = await axios.get(url);
  } catch (e) {
    console.log(`error fetching pages`, e);
  }

  result.data.data.forEach(({ type, id, attributes }) => {
    //console.log(attributes);
    console.log(attributes);
    actions.createPage({
      path: attributes.path,
      component: path.resolve(`./src/components/pages/content/contentPage.js`),
      context: {
        title: attributes.title,
        body: attributes.body
      },
    })
  });
}