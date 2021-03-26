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
  pokemonList.push(pokemon);
}

//retrives pokemonList data
function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  listPokemon.classList = "pokemon-item";
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
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




//   //if height is greater than 6ft
//   if (pokemon.height >= 6) {
//     document.write(
//       `<div class="pokemon__item">
//       <img class="pokemon__pic" src="${(pokemon.image)}" alt="Pokemon illustration">
//       <h1>${(pokemon.name)}</h1> 
//       <p>Height: ${pokemon.height}ft<br>
//       Type: ${(pokemon.type)}<br><br>
//       WOW! That is a BIG pokemon!</p>
//       </div>`);

//     //if height is between 3ft and 6ft
//   } else if (pokemon.height > 3 && pokemon.height < 6) {
//     document.write(
//       `<div class="pokemon__item">
//       <img class="pokemon__pic" src="${(pokemon.image)}" alt="Pokemon illustration">
//       <h1>${(pokemon.name)}</h1> 
//       <p>Height: ${pokemon.height}ft<br>
//       Type: ${(pokemon.type)}<br><br>
//       Defintely not the tallest pokemon I've seen!</p>
//       </div>`);

//     //if height is less than 6ft
//   } else {
//     document.write(
//       `<div class="pokemon__item">
//       <img class="pokemon__pic" src="${(pokemon.image)}" alt="Pokemon illustration">
//       <h1>${(pokemon.name)}</h1> 
//       <p>Height: ${pokemon.height}ft<br>
//       Type: ${(pokemon.type)}<br><br>
//       Aww! That pokemon is so tiny!</p>
//       </div>`);
//   }
// })