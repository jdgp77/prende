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

  url = `https://back.barriofiel.jdgp77.com/jsonapi/node/shop?include=field_shop_image`;
  try {
    result = await axios.get(url);
  } catch (e) {
    console.log(`error fetching pages`, e);
  }

  let included = result.data.included;
  result.data.data.forEach(({ type, id, attributes, relationships }) => {
    if (attributes && attributes.path && attributes.path.alias) {
      let arImagesId = [];
      for (let i = 0; i < relationships.field_shop_image.data.length ; i++) {
        var image = relationships.field_shop_image.data[i];
        arImagesId[arImagesId.length] = image['id'];
      }
      let arImages = [];
      for (let i = 0; i < included.length ; i++) {
        for (let j = 0; j < arImagesId.length ; j++) {
          if (included[i].id == arImagesId[j]) {
            var inc = included[i];
            if (inc && inc.attributes && inc.attributes.uri && inc.attributes.uri.url) {
              arImages[arImages.length] =  'https://back.barriofiel.jdgp77.com' + inc.attributes.uri.url;
            }
          }
        }
      }
      
      actions.createPage({
        path: attributes.path.alias,
        component: path.resolve(`./src/local-components/pages/shop/shopPage.jsx`),
        context: {
          title: attributes.title,
          body: (attributes.field_description ? (attributes.field_description.value ? attributes.field_description.value : '') : ''),
          image: arImages,
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