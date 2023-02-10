import axios from 'axios'

const state = {
    pokemonData: {},
    pokemonEvolutions: [],
}

const actions = {
  async searchPokemon({ commit }, pokemonName) {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if (data.status !== 200) {
        throw new Error("Error during the request")
      }
      commit("setPokemonData", data.data)
    } catch (error) {
      throw new Error(error)
    }
  },
  async getPokemonData({ dispatch }, pokemonSpecie) {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSpecie}`)
      if (data.status !== 200) {
        throw new Error("Error during the request")
      }
      dispatch("getEvolutions", data.data.evolution_chain.url)
    } catch (error) {
      throw new Error(error)
    }
  },
  async getEvolutions({ commit }, evolutionChainURL) {
    try {
      const data = await axios.get(evolutionChainURL)
      if (data.status !== 200) {
        throw new Error("Error during the request")
      }
      commit("setPokemonEvolutions", data.data)
    } catch (error) {
      throw new Error(error)
    }
  },
}

const mutations = {
  setPokemonData: (state, data) => {
    const parsedData = {
      name: data.name.toUpperCase(),
      type: data.types[0].type.name,
      image: data.sprites.other["official-artwork"].front_default,
    }
    data.stats.forEach((stat)=> parsedData[stat.stat.name] = stat.base_stat)
    state.pokemonData = parsedData
  },
  setPokemonEvolutions: (state, data) => {
    state.pokemonEvolutions = []
    function evolution(pokemon) {
      state.pokemonEvolutions.push(pokemon.species.name)
      if(pokemon.evolves_to.length > 0) {
        evolution(pokemon.evolves_to[0]);
      } else {
        return
      }
    }
    if(data.chain.evolves_to.length > 0){
      state.pokemonEvolutions.push(data.chain.species.name)

      data.chain.evolves_to.forEach(pokemon => {
        evolution(pokemon)
      });
    }else{
      state.pokemonEvolutions.push(data.chain.species.name)
    }
  },
}

const getters = {}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}