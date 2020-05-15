import defaultjs from './../default';

export var token = '';
const url_base = 'https://back.educacioninteractiva.com.co';

// Json Get : Read a external API with JSON 
const jGet = info => {
  //  Carga los valores por defecto en caso de que no existan
  info = defaultjs.defaultJson(info, {
    //  Url a utilizar enviar
    url: '',
    //  Información a enviar,
    data: {},
    //  Metodo en caso ser una petición exitosa tipo 200
    then: () => {},
    //  Metodo en caso de error
    err: () => {},
    //  En true, el envia el token del usuario
    withToken: false,
    //  El metodo de la petición
    method: 'GET',
    //  En true, el ejecuta este de forma asincrona
    async: true,
    //  En true, pide el resultado y en la siguiente consulta lo llama de carga de memoria(No realiza de nuevo la peticion)
    cache: false
  });

  if (info.withToken) {
    jGetToken();
  }

  fetch(`${url_base}${info.url}`, {
    headers: new Headers({ 
      
    })
  })
  .then(function(result) {
    return result.json();
  })
  .then(function(result) {
    info.then(result)
  }).catch(function(err){
    info.err(err)
  });
}

//  Json post
export const jPost = (info) => {
  info = defaultjs.defaultJson(info, {
    url: '',
    data: {},
    then: () => {},
    err: () => {},
    async: true,
  });

  jGetToken();

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  fetch(`${url_base}${info.url}`, {
    method: 'POST',
    body: JSON.stringify(info.data),
    headers: {
      'Content-Type': 'application/json'
      'X-CSRF-Token': token,
    }
  })
  .then(function(result) {
    return result.json();
  })
  .then(function(result) {
    info.then(result)
  }).catch(function(err){
    info.err(err)
  });
}

export const filterTextFormat = (description) => {
	return description = description.split('src="/sites/').join('src="' + url_base + '/sites/')
}

//  Carga el token, debe ser usada antes de cualquier POST
const jGetToken = () => {
  if (token !== '') {
    return token;
  }
  else {
    jGet({
      url: `/rest/session/token`,
      async: false,
      then: (result) => {
        token = result;
      },
      err: () => {}
    });

    return token;
  }
}

/**
 * Obtiene los items y el result y devuelve un arreglo con los valores
 * puestos en los items
 * 
 * Este metodo depende de getValuesFromItem
 * 
 * @param {*} items 
 * @param {*} result 
 */
export const getValuesFromItems = (items, result) => {
  let data = result.data;
  let prevElemeData = '';

  let arValues = [];
  for (let numData in data) {
    arValues[numData] = [];
    for (let nameField in items) {
      arValues[numData][nameField] = '';
      prevElemeData = data[numData];
      let bnItemWhitRelation = false;
      let bnFirstTimeInForIntems = true;
      let item = items[nameField];
      let itemData = item;
      if (bnFirstTimeInForIntems && item.included) {
        itemData = item.data;
        bnItemWhitRelation = true;
      }
      // Pasa por cada campo de itemData hasta obtener
      // el valor del item
      for (let numField in itemData) {
        if (itemData[numField]) {
          if (prevElemeData[itemData[numField]]) {
            prevElemeData = prevElemeData[itemData[numField]];
          }
        }
      }
      
      let arDataRelation = [];
      // Si es una relación
      if (bnItemWhitRelation) {
        if (Array.isArray(prevElemeData) && prevElemeData.length > 0) {
          for (let i in prevElemeData) {
            arDataRelation[arDataRelation.length] = prevElemeData[i];
          }
        }
        //debugger;

        // Añade el valor relacionado 
        for (let i in arDataRelation) {
          let dataRelation = arDataRelation[i];
          
          if (item.included) {
            let included = result.included;
            
            for (let numIncluded in included) {
              let itemIncluded = item.included;
              let prevElemeIncluded = included[numIncluded];
              let withFilter = [];
              if (prevElemeIncluded.id === dataRelation.id && prevElemeIncluded.type === dataRelation.type) {
                // Pasa por cada campo de itemData hasta obtener
                // el valor del item
                for (let numField in itemIncluded) {
                  if (itemIncluded[numField]) {
                    let itemInclInNumField = itemIncluded[numField];
                    console.log('itemInclInNumField', itemInclInNumField);
                    if (itemInclInNumField.indexOf(":") !== '0') {
                      if (prevElemeIncluded[itemInclInNumField]) {
                        prevElemeIncluded = prevElemeIncluded[itemInclInNumField];
                      }
                    }
                    else {
                      withFilter[withFilter.length] = itemInclInNumField.split(':')[1];
                    }
                  }
                }
                
                if (typeof prevElemeIncluded === 'string' || typeof prevElemeIncluded === 'number') {
                  // Si es mas de uno lo guarda como arreglo
                  if (arValues[numData][nameField] === '') {
                    arValues[numData][nameField] = prevElemeIncluded;
                  }
                  else {
                    if (!Array.isArray(arValues[numData][nameField])) {
                      arValues[numData][nameField] = [arValues[numData][nameField]];
                    }
                    for (let i = 0; i < withFilter.length; i++) {
                      if (withFilter[i] === 'FilterTextToLocalFormat') {
                        prevElemeIncluded = filterTextFormat('jaja');
                      }
                    }
                    arValues[numData][nameField][arValues[numData][nameField].length] = prevElemeIncluded;
                  }
                }
              }
            }
          }
        }
      }
      
      if (typeof prevElemeData === 'string' || typeof prevElemeData === 'number') {
        arValues[numData][nameField] = prevElemeData;
      }
      bnFirstTimeInForIntems = false;
    }
  }
  
  return arValues;
}

export default jGet;