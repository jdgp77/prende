import React, { Component } from 'react';
import './WorkTeam.scss';

class Autor extends Component {
  constructor() {
    super();
    this.state = {
      img: "Cargando",
      name: "Cargando",
      description: "Cargando"
    }
  }

  componentAutor() {
    const apiAuthor = `https://back.drupalcamp.co/jsonapi/user/user/f09aa61f-9e16-4cd1-9565-20785d32fadc?include=user_picture&fields[user--user]=field_profile_description,field_profile_name&fields[file--file]=uri`;
    //let idUser = 'f09aa61f-9e16-4cd1-9565-20785d32fadc';
    fetch(apiAuthor)
      .then(function (result) {
        return result.json();
      })
      .then((authors) => {
        let imgPerfil = authors.included["0"].attributes.uri.url;
        let aut = authors.data;
        let namePerfil = aut.attributes.field_profile_name;
        let descriPerfil = aut.attributes.field_profile_description.value;
        console.log("autor:", authors);
        this.setState({
          img: imgPerfil,
          name: namePerfil,
          description: descriPerfil
        })
      })
  }
  componentDidMount () {
    this.componentAutor();
  }

  render() {
    return <div className="row autor">
        <div className="col s12 l4" id="autor">
          <div className="card">
            <div className="card-image">
              <img className="circle responsive-img" src={"https://back.drupalcamp.co/" + this.state.img} />
            </div>
            <div className="card-content">
              <h5 className="center">{this.state.name}</h5>
              <span dangerouslySetInnerHTML={{__html: this.state.description }}></span>
            </div>
          </div>
        </div>
      </div>
  }
}

export default Autor;