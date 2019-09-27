import React, { Component } from 'react';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import * as StarWars from './services/starWars.js';

export default class Main extends Component {

  state = {
    module: 'people',
    numeracao: 1,
    starWars: []
  };

  async getStarWarsData() {
    let data = await StarWars.StarWarsApi(this.state.module, this.state.numeracao);
    this.setState({
      starWars: data
    })
    console.log(data)
    console.log(this.state.starWars)
  }

  setModule = (modulo) => {
    this.setState({
      module: modulo
    })
    this.getStarWarsData();
  }

  componentDidMount() {
    this.getStarWarsData();
  }

  render() {
    return (
      <section className="main-content">
        <Form state={this.state} module={this.setModule} />
        <Preview state={this.state} />
      </section>
    );
  }
}

