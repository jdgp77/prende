import React, { Component } from 'react';
import './BuscarBlock.scss';
import TextField from '@material-ui/core/TextField';
import List from '../../structure/lists/list/List';


class BuscarBlock extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return <div className="section search" >
      <div className="place-search" >
        <form autoComplete="off">
          <TextField className="p-search-input"  id="outlined-basic" label="¿Que Buscas?" variant="outlined" />
        </form>
      </div>
      <div className="section search-result" >
        <List type={"items"} numCols={4} data={[
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
          {
            title: '¿Que buscas?',
            description: 'Dejanos ayudarte',
            image: '/images/sponsors/Acquia.png',
            link: {
              url: 'https://www.acquia.com/',
              target: '_blank'
            },
          },
        ]}></List>
      </div>
    </div>
  }
}

export default BuscarBlock;