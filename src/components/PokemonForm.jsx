import { useState } from 'react';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      alert('Enter name pokemon');
      return;
    }

    onSubmit(pokemonName); //передача через пропс імені покемона для пошуку
    setPokemonName(''); //очистка форми після відправки
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
