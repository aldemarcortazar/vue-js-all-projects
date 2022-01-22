import { ref } from 'vue';
import axios from "axios";

const useUsers = ( ) => {

    const users = ref( [] );
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMessague = ref( null );
    

    const getUsers = async ( page = 1 ) => {
        try {
            if( page <= 0 ) page = 1;
            const { data} = await axios.get( 'https://reqres.in/api/users', {
                params: { page }
            });

            if( data.data.length > 0 ){
                users.value = data.data;
                currentPage.value = page;
                errorMessague.value = null;
            }else if( currentPage.value > 0 ){
                errorMessague.value = 'No hay mas usuarios';
            }

            isLoading.value = false;
        } catch (error) {
            errorMessague.value= "ocurrio un error inexperado";
        }

        
    }

    getUsers( 1 );

    return {
        users,
        isLoading,
        currentPage,
        errorMessague,
        nextPage: () => getUsers( currentPage.value + 1 ),
        previousPage: () => getUsers( currentPage.value - 1 ),
    }
}

export default useUsers;