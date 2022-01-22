import axios from 'axios';
import { ref } from 'vue';

const usePokemon = ( ) => {

    const pokemon       = ref();
    const isLoading     = ref(false);
    const errorMessague = ref(  );


    const searchPokemon = async ( id ) => {

        if( !id  ) return;

        isLoading.value = true;
        pokemon.value = null;

        try{
            const { data } = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
            pokemon.value = data;
            errorMessague.value = null;
        }catch( error){
            errorMessague.value = 'no se pudo cargar ese pokemon';
        }
        isLoading.value = false;
    }

    searchPokemon();

    return {
        errorMessague,
        isLoading,
        pokemon,
        searchPokemon,
    }
}

export default usePokemon;