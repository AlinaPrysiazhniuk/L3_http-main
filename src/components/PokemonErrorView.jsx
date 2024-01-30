import errorImage from './error.png';

export default function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} alt="sadcat" width="240" />
      <p> {message}</p>
    </div>
  );
}
