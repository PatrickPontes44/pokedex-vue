<template>
    <section
      class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 container mx-auto"
    >
      <p v-for="pokemon in PokemonsList" :key="pokemon">{{ pokemon }}</p>
    </section>

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
  