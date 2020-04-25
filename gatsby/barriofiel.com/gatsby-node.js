/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using 

const axios = require(`axios`);
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

  let url = `https://back.barriofiel.jdgp77.com/jsonapi/node/page`;

  let result;
  try {
    result = await axios.get(url);
  } catch (e) {
    console.log(`error fetching pages`, e);
  }

  result.data.data.forEach(({ type, id, attributes }) => {
    //console.log(attributes);
    if (attributes && attributes.path && attributes.path.alias) {
      actions.createPage({
        path: attributes.path.alias,
        component: path.resolve(`./src/local-components/pages/content/contentPage.js`),
        context: {
          title: attributes.title,
          body: (attributes.body ? (attributes.body.value ? attributes.body.value : '') : '')  
        },
      })
    }
  });

  url = `https://back.barriofiel.jdgp77.com/jsonapi/node/shop`;
  try {
    result = await axios.get(url);
  } catch (e) {
    console.log(`error fetching pages`, e);
  }

  result.data.data.forEach(({ type, id, attributes }) => {
    if (attributes && attributes.path && attributes.path.alias) {
      actions.createPage({
        path: attributes.path.alias,
        component: path.resolve(`./src/local-components/pages/content/contentPage.js`),
        context: {
          title: attributes.title,
          body: (attributes.field_description ? (attributes.field_description.value ? attributes.field_description.value : '') : ''),
          field_short_description: (attributes.field_short_description ? attributes.field_short_description : ''),
          field_description: (attributes.field_description ? (attributes.field_description.value ? attributes.field_description.value : '') : ''),
          phone: (attributes.phone ? attributes.phone : ''),
          field_address: (attributes.field_address ? attributes.field_address : ''),
          field_whatsapp: (attributes.field_whatsapp ? attributes.field_whatsapp : '')
        },
      })
    }
  });
  
  
}