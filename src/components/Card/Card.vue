<template>
    <div class="rounded-xl flex-1 relative overflow-hidden" :class="[Types[props.pokemon.type]?.background]">
        <div class="rounded-xl h-80 lg:h-80 bg-cover text-center overflow-hidden"
        :style="{ 'background-image': 'url(' + bgCover + ')' }"
        >
            <div class="rounded-xl h-80 lg:h-80 bg-contain bg-center bg-no-repeat text-center overflow-hidden"
                :style="{ 'background-image': 'url(' + props.pokemon.image + ')' }"
                :title="props.pokemon.name">
            </div>
        </div>
        <div
            class="bg-white rounded-xl text-zinc-900 p-4 flex flex-col gap-5 leading-normal absolute top-[80%] left-0 w-full h-full hover:top-0 transition-[top]">
            <div class="font-bold text-md lg:text-lg xl:text-xl flex flex-row justify-between items-center">
                {{ props.pokemon.name }}
                <div class="flex flex-row justify-center items-center gap-2">
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm flex align-center w-max shadow"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        HP: {{ props.pokemon.hp }}
                    </span>
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm flex align-center w-max shadow"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        <img class="w-4 animate-pulse" :src="Types[props.pokemon.type]?.icon" />
                    </span>
                </div>
            </div>
            <div class="font-bold text-md lg:text-lg xl:text-xl">
                <div class="flex flex-col justify-center items-center gap-2 w-full flex-wrap">
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm shadow w-full flex-1"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        Ataque: {{ props.pokemon.attack }}
                    </span>
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm shadow w-full flex-1"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        Defesa: {{ props.pokemon.defense }}
                    </span>
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm shadow w-full flex-1"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        Ataque Especial: {{ props.pokemon["special-attack"] }}
                    </span>
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm shadow w-full flex-1"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        Defesa Especial: {{ props.pokemon["special-defense"] }}
                    </span>
                    <span
                    class="px-4 py-2 rounded-full font-semibold text-sm shadow w-full flex-1"
                    :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                    >
                        Velocidade: {{ props.pokemon["speed"] }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Types } from "../../utils/types"
import bgCover from "../../assets/images/bg.png"

export default {
    name: 'CardComponent',
    props:{
        pokemon: {
        type: Object,
        default() {
            return {
                name: '',
                type: '',
                image: '',
                hp: '',
            }
        },
        },
    },
    setup(props) {
        return{
            Types,
            props,
            bgCover,
        }
    }
}
</script>

