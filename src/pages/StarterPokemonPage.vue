<template>
<main class="
    flex flex-col justify-center items-center  text-white w-full h-screen py-10 gap-y-10">
    <section class="w-full lg:w-4/12 p-4 flex flex-col justify-center" v-if="data.pokemon.length > 0">
        <Card v-for="pokemon in data.pokemon" :key="pokemon.name" :pokemon="pokemon" />
    </section>
</main>
</template>

<script>
import {
    mapActions,
    mapState
} from '../store/VuexMaps'
import {
    reactive,
    watch,
    onMounted
} from "vue"
import {
    PokemonsList
} from "../utils/pokemons.js"
import {
    Card
} from "../components/Card"

export default {
    name: 'HomePage',
    components: {
        Card,
    },
    setup() {
        const {
            pokemonData
        } = mapState('Pokedex')
        const {
            searchPokemon
        } = mapActions('Pokedex')

        const data = reactive({
            pokemon: [],
        })
        const randomStarter = ["bulbasaur", "charmander", "squirtle", "pikachu", "chikorita", "cyndaquil", "totodile", "treecko", "torchic", "mudkip", "turtwig", "chimchar", "piplup", "snivy", "tepig", "oshawott", "chespin", "fennekin", "froakie", "rowlet", "litten", "popplio", "grookey", "scorbunny", "sobble"]

        onMounted(async () => {
          const starter = Math.floor(Math.random() * randomStarter.length)
            await searchPokemon(randomStarter[starter])
        })

        watch(() => pokemonData.value, value => {
            if (value) {
                data.pokemon.push(value)
            }
        })

        return {
            pokemonData,
            searchPokemon,
            data,
            PokemonsList,
            Card,
        }
    }
}
</script>
