import React, { Component } from "react";
import "./../Home/home.css";

class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then(r => r.json())
      .then(json => {
        this.setState({ filme: json });
        console.log(json);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="filme">
          <h1>{this.state.filme.nome}</h1>
          <img
            src={this.state.filme.foto}
            alt={`Capa do filme ${this.state.filme.nome}`}
          />
          {this.state.filme.length !== 0 && <h3>Sinopse</h3>}
          <p>{this.state.filme.sinopse}</p>
        </div>
      </div>
    );
  }
}

export default Filme;
