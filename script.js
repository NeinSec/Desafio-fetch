const pokemonContainer = document.getElementById('pokemon-container')


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => { console.log(data)    
        createPokemon(data);
      })
  }

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i)
    }
}

function createPokemon(pokemon) {
    pokemonContainer.innerHTML += ` 
    <div class="card pokemon-block m-2 rounded" style="width: 18rem; ">
        <img src="${pokemon.sprites.front_default}" class="card-img-top img-container" alt="...">
        <div class="card-body">
            <h5 class="card-title name">${pokemon.name}</h5>
            <p class="card-text">${pokemon.id.toString().padStart(3, 0)}</p>
            <a href="#" class="btn btn-primary">Mas Información</a>
        </div>
    </div>
    `
  
  }

fetchPokemons(150)