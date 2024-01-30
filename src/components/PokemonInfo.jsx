import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    //тут завжди робити перевірку
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error(`No name ${nextName}`));
        })

        .then(pokemon => this.setState({ pokemon, status: 'resolved' })) //передаємо в активний стейт імя покемона
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter pokemon name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
