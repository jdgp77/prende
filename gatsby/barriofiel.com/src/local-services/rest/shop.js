export const getShopImages = (data, included) => {
  let relationships = data.relationships;
  if (relationships) {
    let arImages = [];
    let arImagesId = [];
    for (let i = 0; i < relationships.field_shop_image.data.length ; i++) {
      let image = relationships.field_shop_image.data[i];
      arImagesId[arImagesId.length] = image['id'];
    }
    for (let i = 0; i < included.length ; i++) {
      for (let j = 0; j < arImagesId.length ; j++) {
        if (included[i].id === arImagesId[j]) {
          var inc = included[i];
          if (inc && inc.attributes && inc.attributes.uri && inc.attributes.uri.url) {
            arImages[arImages.length] =  'https://back.barriofiel.jdgp77.com' + inc.attributes.uri.url;
          }
        }
      }
    }
    return arImages;
  }
  return false;
}