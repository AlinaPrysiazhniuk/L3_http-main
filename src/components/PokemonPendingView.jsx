import { ImSpinner } from 'react-icons/im';

export default function PokemonPendingView({ pokemon }) {
  //   const pokemon = {
  //     name: pokemonName,
  //     sprites: {
  //       other: {
  //         'official-artwork': {
  //           front_default: pendingImage,
  //         },
  //       },
  //     },
  //     stats: [],
  //   };

  return (
    <div>
      <div>
        <ImSpinner size="32" className="icon-spin" />
      </div>
    </div>
  );
}
