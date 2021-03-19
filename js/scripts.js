let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    image: 'img/bulbasaur.png',
    type: ['grass','poison']
    },
  {
    name: 'Charizard',
    height: 5,
    image: 'img/charizard.png',
    type: ['fire','flying']
    },
  {
    name: 'Lapras',
    height: 8,
    image: 'img/lapras.png',
    type: ['water','ice']

  }
];

/* A for loop to iterate over each element of the array and then write it on the DOM.*/

for (let i = 0; i < pokemonList.length; i++) {
  
  //if height is greater than 6ft
  if (pokemonList[i].height >= 6) {
    document.write(
      `<div class="grid__item">
      <img class"pokemon__pic" src="${(pokemonList[i].image)}">
      <h2>${(pokemonList[i].name)}</h2> 
      <p>${pokemonList[i].height}ft tall - Wowza! That is a BIG pokemon!</p>
      </div>`);

    //if height is between 3ft and 6ft
  } else if (pokemonList[i].height > 3 && pokemonList[i].height < 6) {
    document.write(
    `<div class="grid__item">
    <img class"pokemon__pic" src="${(pokemonList[i].image)}">
    <h2>${(pokemonList[i].name)}</h2>
    <p>${pokemonList[i].height}ft tall - Defintely not the tallest pokemon I've seen!</p>
    </div>`);

    //if height is less than 6ft
  } else {
    document.write(
    `<div class="grid__item">
    <img class"pokemon__pic" src="${(pokemonList[i].image)}">
    <h2>${(pokemonList[i].name)}</h2>
    <p>${pokemonList[i].height}ft tall - Aww! That pokemon is so tiny!</p>
    </div>`);
  }
}