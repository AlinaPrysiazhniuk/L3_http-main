import { useState } from 'react';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');

  const handleFormSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };

  return (
    <>
      <PokemonForm onSubmit={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
