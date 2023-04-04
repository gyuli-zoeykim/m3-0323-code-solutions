
export default function PokemonList({prop}) {
  const pokemonList = prop.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>);
  return <ul>{pokemonList}</ul>;
}
