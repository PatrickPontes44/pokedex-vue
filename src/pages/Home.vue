<template>
  <main class="
    flex flex-col justify-center items-center  text-white w-full h-auto py-10 gap-y-10"
  >
    <section class="w-full md:w-10/12  flex flex-col justify-center items-center">
      <label for="pokemonsList" class="lg:text-4xl md:text-2xl sm:text-xs	antialiased">Escolha um Pokémon</label>
      <div class=" w-full flex flex-row justify-center items-center gap-x-4 mt-5">
        <input 
        list="pokemonsList" 
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-8/12 sm:w-full"
        v-model="data.typedPokemon">
        <button @click="handleSearch" class="transition ease-in-out delay-150 hover:scale-125">
          <img class="w-5 md:w-10 lg:w-10 animate-bounce" src="../assets/images/pokeball.svg" />
        </button>
      </div>
      <datalist id="pokemonsList" class="bg-zinc" >
        <option v-for="pokemon in PokemonsList" :key="pokemon" :value="pokemon" class="bg-zing-500" />
      </datalist>
      <p v-if="data.error" class="mt-2 text-red-500	font-bold	">Por favor selecione um Pokémon!</p>
    </section>
    <section class="w-full lg:w-10/12 p-4 lg:p-0 grid grid-cols-1 lg:grid-cols-3 gap-6" v-if="data.pokemon.length > 0">
      <Card v-for="pokemon in data.pokemon" :key="pokemon.name" :pokemon="pokemon"  />
    </section>
  </main>
</template>
  

<script>
  import { mapActions, mapState } from '../store/VuexMaps'
  import { reactive, watch } from "vue"
  import { PokemonsList } from "../utils/pokemons.js"
  import { Card } from "../components/Card"

  export default {
    name: 'HomePage',
    components:{
      Card,
    },
    setup(){
      const { pokemonData, pokemonEvolutions } = mapState('Pokedex')
      const { searchPokemon, getPokemonData } = mapActions('Pokedex')

      const data = reactive({
        pokemon: [],
        typedPokemon: "",
        error: false,
      })

      async function handleSearch(){
        if(data.typedPokemon){
          data.error = false
          data.pokemon = []
          await getPokemonData(data.typedPokemon.toLowerCase())
        }else{
          data.error = true
        }
      }

      watch(() => pokemonData.value, value => { 
        if (value) {
          data.pokemon.push(value)
        }
      })

      watch(() => pokemonEvolutions.value, value => { 
        if (value) {
          value.forEach(async(pokemon)=>{
            await searchPokemon(pokemon)
          })

        }
      })


      return{
        pokemonData,
        searchPokemon,
        getPokemonData,
        data,
        PokemonsList,
        handleSearch,
        Card,
        pokemonEvolutions,
      }
    }
  }
  </script>
  