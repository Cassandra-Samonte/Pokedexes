/* Require modules
--------------------------------------------------------------- */
const axios = require('axios');

/* Export API functions
--------------------------------------------------------------- */
module.exports = {
    getKantoData: async function() {
        const pokemonData = await axios.get('https://pokeapi.co/api/v2/pokedex/2/');
        const pokemonEntries = pokemonData.data.pokemon_entries;
        
        let pokemonDetails = [];
        
        for (let entry of pokemonEntries) {
            const detailsUrl = entry.pokemon_species.url.replace("-species", "");
            const data = await axios.get(detailsUrl);
            let pokemonInfo = {
                id: data.data.id,
                name: data.data.name,
                sprite: data.data.sprites.other["official-artwork"].front_default,
                types: data.data.types.map(typeInfo => typeInfo.type.name) 
            };

            pokemonDetails.push(pokemonInfo);
        }

        return pokemonDetails;
    }
}