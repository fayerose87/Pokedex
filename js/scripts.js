//wrap pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    image: 'img/bulbasaur.png',
    type: ['Grass'+ ', ' + 'Poison']
    },
  {
    name: 'Charizard',
    height: 5,
    image: 'img/charizard.png',
    type: ['Fire'+ ', ' + 'Flying']
    },
  {
    name: 'Lapras',
    height: 8,
    image: 'img/lapras.png',
    type: ['Water'+ ', ' + 'Ice']
  }
];

//adds pokemon to pokemonList
function add(pokemon) {
  if (
    typeof pokemon === 'object' &&
    'name' in pokemon &&
    'height' in pokemon &&
    'type' in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log('pokemon is not correct');
  }
}

//retrives pokemonList data
function getAll() {
  return pokemonList;
}

//create pokemon list with button
function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  listPokemon.classList = 'pokemon-item';
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function(event){
    showDetails(pokemon);
});
}

//shows pokemon details on click
function showDetails(pokemon) {
  console.log(pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

//add pokemon Slowpoke to pokemonList
pokemonRepository.add({
  name: 'Slowpoke',
  height: 4,
  image: 'img/slowpoke.png',
  type: ['Water'+ ', ' + 'Psychic']
})


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});