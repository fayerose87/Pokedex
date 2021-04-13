//IIFE
let pokemonRepository = (function () {

  //load pokemon from API
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // let modalContainer = document.querySelector('#modal-container');

  //adds pokemon to pokemonList
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  //retrives pokemon data
  function getAll() {
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name, 
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //create pokemon list with button
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listPokemon = document.createElement('li');
    listPokemon.classList.add('group-list-item', 'col-2');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.setAttribute('type', 'button');
    button.setAttribute('data-target','#pokemonModal');
    button.setAttribute('data-toggle', 'modal');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');
      let modalHeader = $('.modal-header');

      //clear existing content of the modal
      modalTitle.empty();
      modalBody.empty();

      //create element for name in modal
      let pokemonName = $("<h1>" + pokemon.name + "</h1>")
    
      //create img in modal
      let pokemonImage = $('<img class="modal-img" style="width:50%">');
      pokemonImage.attr("src", pokemon.imageUrl);
    
      //create element for height in modal
      let pokemonHeight = $("<p>" + "Height: " + pokemon.height + "ft" + "</p>");

      //create element for weight in modal
      let pokemonWeight = $("<p>" + "Weight: " + pokemon.weight + "lbs" + "</p>");

      //create element for types in modal
      let pokemonType = $("<p>" + "Type: " + pokemon.types + "</p>");

      //append to Modal Container
      modalTitle.append(pokemonName)
      modalBody.append(pokemonImage);
      modalBody.append(pokemonHeight);
      modalBody.append(pokemonWeight);
      modalBody.append(pokemonType);
    });
  }

  //details to show when button is clicked
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
      item.types = [];
      details.types.forEach(function(itemType){
        item.types.push(' ' + itemType.type.name);
      })
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});