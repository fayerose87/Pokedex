let pokemonList = [
  {
    name: 'Articuno',
    height: 3,
    type: ['ice','flying']
    },
  {
    name: 'Zapdos',
    height: 5,
    type: ['electric','flying']
    },
  {
    name: 'Moltres',
    height: 6,
    type: ['fire','flying']
  }
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Wowza! That is a BIG pokemon!<br/>`);
  } else if (pokemonList[i].height > 3 && pokemonList[i].height <6) {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - That is medium pokemon!<br/>`);
  } else {
    document.write(`${(pokemonList[i].name)} is ${pokemonList[i].height}ft tall - Aww! That pokemon is tiny!<br/>`);
  }
}
