<template>
  <input list="pokemonsList" class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username">
  <datalist id="pokemonsList" class="">
    <option v-for="pokemon in PokemonsList" :key="pokemon" :value="pokemon" />
  </datalist>


  <!-- {{ data.pokemon }} -->
</template>
  
<script>
  import { mapActions, mapState } from '../store/VuexMaps'
  import { onMounted, reactive, watch } from "vue"
  import { PokemonsList } from "../utils/pokemons.js"

  export default {
    name: 'HomePage',
    setup(){
      const { pokemonData } = mapState('Pokedex')
      const { searchPokemon } = mapActions('Pokedex')

      const data = reactive({
        pokemon: []
      })

      watch(() => pokemonData.value, value => { 
        if (value) {
          data.pokemon = value
        }
      })

      onMounted(async() => {
        await searchPokemon("pikachu")
      })

      return{
        pokemonData,
        searchPokemon,
        data,
        PokemonsList
      }
    }
  }
  </script>
  
  <style>

  </style>
  