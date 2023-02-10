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
            class="bg-white rounded-xl text-zinc-900 p-4 flex flex-col justify-between leading-normal absolute top-[80%] left-0 w-full h-full hover:top-0 transition-[top]">
            <div class="font-bold text-md lg:text-lg xl:text-xl flex flex-row justify-between items-center">
                {{ props.pokemon.name }}
                <span
                class="px-4 py-2 rounded-full font-semibold text-sm flex align-center w-max shadow"
                :class="[Types[props.pokemon.type]?.background, Types[props.pokemon.type]?.color]"
                >
                    HP: {{ props.pokemon.hp }}
                </span>
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

