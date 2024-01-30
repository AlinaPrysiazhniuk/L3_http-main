import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import { useState, useEffect } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemonName] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      //перший рендер, pokemoName це пустий рядок, не робимо fetch
      return;
    }

    setStatus(Status.PENDING);

    fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error(`No name ${pokemonName}`));
      })

      .then(pokemon => {
        setPokemonName(pokemon);
        setStatus(Status.RESOLVED);
      }) //передаємо в активний стейт імя покемона
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter pokemon name</div>;
  }
  //hgfjhgfjhgfg
  if (status === Status.PENDING) {
    return <PokemonPendingView pokemon={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
