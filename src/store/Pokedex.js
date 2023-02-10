import axios from 'axios'

const state = {
    pokemonData: []
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
}

const mutations = {
  setPokemonData: (state, data) => {
    state.pokemonData = data
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