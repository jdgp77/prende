import React, { Component } from 'react';
import './BuscarBlock.scss';
import TextField from '@material-ui/core/TextField';
import TutorialList from '../tutorial-list/TutorialList';
import jGet, { getValuesFromItems } from '../../../global-services/rest/connect';


class BuscarBlock extends Component {

  constructor() {
    super();
    
    this.state = {
      info: {
        result: [
          {
            url: '/jsonapi/node/course?include=field_knowledge_area,field_tutorialgroups,field_company_area',
            nameFieldState: 'listCourses',
            items: {
              title: ['attributes', 'title'],
              summary: ['attributes', 'body', 'summary'],
              body: ['attributes', 'body', 'value', ':FilterTextToLocalFormat'],
              link: ['attributes', 'path', 'alias'],
              knowledge_area: {
                data: ['relationships','field_knowledge_area', 'data'],
                included: ['attributes', 'name']
              },
              field_tutorialgroups: {
                data: ['relationships','field_tutorialgroups', 'data'],
                included: ['attributes', 'name']
              },
              field_company_area: {
                data: ['relationships','field_company_area', 'data'],
                included: ['attributes', 'name']
              }
            },
            info: {
              type: 'media',
            }
          },
          {
            url: '/jsonapi/node/tutorial?include=field_knowledge_area,field_company_area',
            nameFieldState: 'listTutorials',
            items: {
              title: ['attributes', 'title'],
              summary: ['attributes', 'body', 'summary'],
              body: ['attributes', 'body', 'value'],
              link: ['attributes', 'path', 'alias'],
              knowledge_area: {
                data: ['relationships','field_knowledge_area', 'data'],
                included: ['attributes', 'name']
              },
              field_company_area: {
                data: ['relationships','field_company_area', 'data'],
                included: ['attributes', 'name']
              }
            },
          }, 
        ],
        filters: [
          {
            title: 'Por conocimiento:',
            item: 'knowledge_area',
            // Valor por defecto: noRepeat: true,
          },
          {
            title: 'Por área en la empresa:',
            item: 'field_company_area',
            // Valor por defecto: noRepeat: true,
          }
        ],
      },
      data: {
        filters: {
          title: 'Fitros',
          options: [],
        },
      },
      search: '',
      listCourses: [],
      listTutorials: [],
    };
    
    this.onKeyUpPrincipalInput = this.onKeyUpPrincipalInput.bind(this);
    this.onChangePrincipalInput = this.onChangePrincipalInput.bind(this);
  }
  
  onKeyUpPrincipalInput (event) {
    console.log('onKeyUpPrincipalInput', event);
  }
  
  onChangePrincipalInput (event) {
    console.log('onChangePrincipalInput', event);
    if (window.document.getElementById('p-search-input')) {
      this.setState({
        search: window.document.getElementById('p-search-input').value
      })
    }
  }
  
  onChangeFilter (event) {
    console.log('onChangeFilter', event);
  }
  
  setFilter (event) {
    console.log('onChangeFilter', event);
  }
  
  getFiltersFromValues (valuesFromItems) {
    let arValueFilters = [];
    let arExistFilters = [];
    for (let numFilters in this.state.info.filters) {
      let filterName = this.state.info.filters[numFilters].item;

      for (let numberValuesFromItems in valuesFromItems) {
        let valuesFromItem = valuesFromItems[numberValuesFromItems];
        if (valuesFromItem[filterName]) {
          if (arValueFilters[filterName] == undefined) {
            arValueFilters[filterName] = [];
            arExistFilters[filterName] = [];
            arValueFilters[filterName]['title'] = this.state.info.filters[numFilters].title;
            arValueFilters[filterName]['options'] = [];
          }
          
          arValueFilters[filterName]['options'] = arValueFilters[filterName]['options'].concat(valuesFromItem[filterName]);
          if (this.state.info.filters[numFilters].noRepeat === undefined) {
            this.state.info.filters[numFilters].noRepeat = true;
          }
          
          // Quita los repetidos
          if (this.state.info.filters[numFilters].noRepeat) {
            let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
            arValueFilters[filterName]['options'] = x(arValueFilters[filterName]['options']);
          }
        }
      }
    }
    
    // Cambia para que el formato sea 
    for (let nameFilter in arValueFilters) {
      this.state.data.filters.options[this.state.data.filters.options.length] = arValueFilters[nameFilter];
    }
    
    return this.state.data.filters.options;
  }
  
  transformValuesToData (valuesFromItems) {
    let arData = [];
    for (let numValue in valuesFromItems) {
      let numArData = arData.length;
      arData[numArData] = [];
      arData[numArData]['title'] = valuesFromItems[numValue]['title'];
      arData[numArData]['description'] = valuesFromItems[numValue]['summary'];
      arData[numArData]['link'] = {
        url: valuesFromItems[numValue]['link'],
        target: '_blank'
      }
    }
    return arData;
  }

  componentDidMount () {
    if (this.state.info.result) {
      this.state.info.result.map((data) => {
        jGet({
          url: data.url,
          withToken: true,
          then: (result) => {
            let valuesFromItems = getValuesFromItems(data.items, result);
            console.log('valuesFromItems', valuesFromItems);
            let options = this.getFiltersFromValues(valuesFromItems);
            console.log('options', options);
            
            let newState = {
              data: {
                filters: {
                  title: 'Fitro',
                  options: options,
                }, 
              },
            };

            newState[data.nameFieldState] = this.transformValuesToData(valuesFromItems);
            console.log(data.nameFieldState, newState[data.nameFieldState]);

            if (data.nameFieldState) {
              newState[data.nameFieldState] = valuesFromItems;
            }
            
            this.setState(newState)
          },
          err: (result) => {
    
          }
        });
      });
    }
  }

  render() {
    return <div className="section search" >
      <div className="place-search" >
        <form autoComplete="off">
          <TextField className="p-search-input"  id="p-search-input" label="Busca, tiendas, papelerias y más" variant="outlined" onChange={this.onChangePrincipalInput} onKeyUp={this.onKeyUpPrincipalInput} />
        </form>
      </div>
      <div className="section search-result" >
        <TutorialList 
          info={{
            search: this.state.search,
          }}
          data={{
            lists: [{
                info: {
                  columns: 'width-fixed',
                  width: '300',
                  type: 'items'
                },
                data: {
                  title: 'Cursos',
                  data: this.state.listCourses,
                  type: 'items'
                }
              },{
                info: {
                  columns: 'width-fixed',
                  width: '300',
                  type: 'items'
                },
                data: {
                  title: 'Tutoriales',
                  data: this.state.listTutorials
                }
              },{
                info: {
                  columns: 'width-fixed',
                  width: '300',
                  type: 'media' 
                },
                data: {
                  title: 'Personas con este conocimiento',
                  data: [
                    {
                      title: 'ing. Julian David Guerrero Pinillaa',
                      description: '<p>Desarrollador</p>',
                      link: {
                        url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                        target: '_blank'
                      }
                    },
                    {
                      title: 'ing. Julian David Guerrero Pinilla',
                      description: '<p>Desarrollador</p>',
                      link: {
                        url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                        target: '_blank'
                      }
                    },
                    {
                      title: 'ing. Julian David Guerrero Pinilla',
                      description: '<p>Desarrollador</p>',
                      link: {
                        url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                        target: '_blank'
                      }
                    },
                    {
                      title: 'ing. Julian David Guerrero Pinilla',
                      description: '<p>Desarrollador</p>',
                      link: {
                        url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                        target: '_blank'
                      }
                    },
                    {
                      title: 'ing. Julian David Guerrero Pinilla',
                      description: '<p>Desarrollador</p>',
                      link: {
                        url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                        target: '_blank'
                      }
                    },
                  ]
                }
              },
            ],
          }} ></TutorialList>
      </div>
    </div>
  }
}

export default BuscarBlock;