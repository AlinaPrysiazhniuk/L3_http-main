import { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
