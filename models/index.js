/* Require modules
--------------------------------------------------------------- */
const axios = require('axios')


/* Export API functions
--------------------------------------------------------------- */
module.exports = {
    // Async function that returns a new page of pokemon data
    getKantoData: async function() {
        const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokedex/2/`)
        const pokemonEntries = pokemonData.data.pokemon_entries
        let url=[]
        for (let entry of pokemonEntries) {
            const replaceUrl = entry.pokemon_species.url.replace("-species", "")
            const data = await axios.get(replaceUrl)
            let obj = {
                name: data.data.name,
                sprite: data.data.sprites.front_default,
                types: data.data.types[0].type.name
            }
            url.push(obj)
        }
        return url
    },
}



