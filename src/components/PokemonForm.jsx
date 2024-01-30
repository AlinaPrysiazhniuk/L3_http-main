import { Component } from 'react';

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      alert('Enter name pokemon');
      return;
    }
    this.props.onSubmit(this.state.pokemonName); //передача через пропс імені покемона для пошуку
    this.setState({ pokemonName: '' }); //очистка форми після відправки
  };

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
