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

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Wowza! That is a BIG pokemon!<br/>`);
  } else if (pokemonList[i].height > 3 && pokemonList[i].height <6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Defintely not the tallest pokemon I've seen!<br/>`);
  } else {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Aww! That pokemon is so tiny!<br/>`);
  }
}
