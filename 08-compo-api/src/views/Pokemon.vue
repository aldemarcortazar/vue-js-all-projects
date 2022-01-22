<template>
    <h2 v-if="!pokemon && !errorMessague"> Buscando... </h2>
    <h2 v-else-if="errorMessague"> {{ errorMessague }} </h2>
    <template v-else>
        <h3> {{ pokemon.name }} </h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <br>
        <router-link :to="{ name: 'pokemon-search' }" > Regresar </router-link>

    </template>
</template>

<script>
import { watch } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

import usePokemon from '../composables/usePokemon.js';

export default {

    setup(){
        const route = useRoute();

        console.log(route.params);
        const { errorMessague, isLoading, pokemon, searchPokemon }  = usePokemon( route.params.id );

        watch( 
            () => route.params.id,
            ( value, previousValue ) =>{
                console.log(value, previousValue);
                searchPokemon( route.params.id );
            }
        );

        onBeforeRouteLeave(()=> {
            console.log( 'onBeforeRouteLeave' );

            const answer = confirm( '¿deberitas deberitas quieres salirte?');

            if( !answer ) return false; // false bloquea la salida
        });

        return{
            errorMessague,
            isLoading,
            pokemon
        }
    }
}
</script>