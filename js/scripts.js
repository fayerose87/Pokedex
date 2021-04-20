//IIFE
let pokemonRepository = (function () {

  //load pokemon from API
  let searchInput = document.querySelector('.search')
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //create pokemon list with button
  function addListItem(pokemon) {
    let pokemonList = $('.pokemon-list');
    let listPokemon = $('<div class="list-group-item col-lg-4 col-md-6 col-sm-12 mx-auto"></div>');

    let button = $('<button></button>');
      button.text(pokemon.name);
      button.addClass('btn');
      button.attr('type', 'button');
      button.attr('data-target','#pokemonModal');
      button.attr('data-toggle', 'modal');
      
      listPokemon.append(button);
      pokemonList.append(listPokemon);
      
      button.on('click', function () {
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
      let pokemonImage = $('<img class="modal-img" style="width:75%">');
        pokemonImage.attr("src", pokemon.imageUrl);
    
      //create element for height in modal
      let pokemonStats = $("<p>" + "<b>Height & Weight:</b> " + pokemon.height + "ft" + ", " + pokemon.weight + "lbs" + "</p>");

      //create element for types in modal
      let pokemonType = $("<p>" + "<b>Type:</b> " + pokemon.types + "</p>");

      //create element for abilities in modal
      let pokemonAbilities = $("<p>" + "<b>Abilities:</b> " + pokemon.abilities + "</p>");

      let types = pokemon.types[0];
        $('.modal-content').addClass(`${types.toLowerCase()}-bg`);
        
       $('.close').on('click', function() {
          $('.modal-content').removeClass(`${types.toLowerCase()}-bg`);
      
        $('#pokemonModal').on('hidden.bs.modal', function (e) {
          $('.modal-content').removeClass(`${types.toLowerCase()}-bg`)
        }); 
      });

      //append to Modal Container
      modalTitle.append(pokemonName)
      modalBody.append(pokemonImage);
      modalBody.append(pokemonStats);
      modalBody.append(pokemonType);
      modalBody.append(pokemonAbilities);
     })
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
      });
      item.abilities = details.abilities;
      item.abilities = [];
      details.abilities.forEach(function(itemAbilities) {
        item.abilities.push(' ' + itemAbilities.ability.name);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  //Search 
  $(document).ready(function() {
    $('#search-bar').on('keyup', function() {
      var value = $(this)
        .val()
        .toLowerCase();
      $('.pokemon-list *').filter(function() {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });
    });
  });


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