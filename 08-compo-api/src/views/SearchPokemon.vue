<template>
    <h1>buscar Pokemon: {{ pokemonId }} </h1>
    <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Numero del pokemon"
            ref="txtSearchId"
            v-model="pokemonId"
        >
        <br />
        <span>Presione Enter para buscar</span>
    </form>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
export default {

    setup(){

        const router = useRouter();
        const pokemonId = ref(1);
        const txtSearchId = ref();
        
        onActivated( () => {
            txtSearchId.value.selected;
        });

        return{
            pokemonId,
            txtSearchId,

            onSubmit: () =>{
                // console.log('Pokemon a buscar', pokemonId.value);
                router.push( { name: 'pokemon-id', params: { id: pokemonId.value } } )
            }
        }
    }

}
</script>
