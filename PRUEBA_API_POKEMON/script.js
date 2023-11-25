const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemonData(pokemonId) {
  try {
    const response = await fetch(`${apiUrl}${pokemonId}`);
    if (!response.ok) {
      throw new Error('Error al obtener datos del Pokémon');
    }

    const data = await response.json();

    document.getElementById('pokemonName').innerText = `Nombre: ${data.name}`;
    document.getElementById('pokemonImage').src = data.sprites.front_default;
    document.getElementById('pokemonType').innerText = `Tipo: ${data.types[0].type.name}`;

    const abilitiesList = document.getElementById('pokemonAbilities');
    abilitiesList.innerHTML = ''; 

    data.abilities.forEach(ability => {
      const listItem = document.createElement('li');
      listItem.innerText = `Habilidad: ${ability.ability.name}`;
      abilitiesList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function searchPokemon() {
  const searchInput = document.getElementById('pokemonSearch');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    alert('Por favor, ingresa un número o nombre de Pokémon.');
    return;
  }

  fetchPokemonData(searchTerm);
}
