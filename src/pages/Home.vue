<template>
    <h1>Hello</h1>
    {{ data.pokemon }}
</template>
  
<script>
  import { mapActions, mapState } from '../store/VuexMaps'
  import { onMounted, reactive, watch } from "vue"
  
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
      }
    }
  }
  </script>
  
  <style>

  </style>
  