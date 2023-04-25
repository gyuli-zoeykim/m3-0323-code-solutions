import './App.css';
import Carousel from './Carousel.js';

const pokedex = [
  { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', name: 'Bulbasaur' },
  { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', name: 'Charmander' },
  { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', name: 'Squirtle' },
  { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', name: 'Pikachu' },
  { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png', name: 'Jigglypuff' }
];


function App() {
  return (
    <Carousel pokedex={pokedex}/>
  );
}

export default App;
