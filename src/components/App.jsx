import React, { Component } from 'react';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>App</div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </>
    );
  }
}
