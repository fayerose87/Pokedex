let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    type: ['grass','poison']
    },
  {
    name: 'Charizard',
    height: 5,
    type: ['fire','flying']
    },
  {
    name: 'Lapras',
    height: 8,
    type: ['water','ice']
  }
];

/* A for loop to iterate over each element of the array and then write it on the DOM.*/

for (let i = 0; i < pokemonList.length; i++) {
  //if height is greater than 6ft
  if (pokemonList[i].height >= 6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Wowza! That is a BIG pokemon!<br/>`);
    //if height is between 3ft and 6ft
  } else if (pokemonList[i].height > 3 && pokemonList[i].height < 6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Defintely not the tallest pokemon I've seen!<br/>`);
    //if height is less than 6ft
  } else {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Aww! That pokemon is so tiny!<br/>`);
  }
}
