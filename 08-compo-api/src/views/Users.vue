<template>
  <h2 v-if="isLoading">Espere por favor ...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessague">Error en la carga</h5>

  <div v-if="users.length > 0" >
      <user-list 
        :users="users"
        v-slot=" { user } "
      >
        <h5> {{ user.first_name }} {{ user.last_name }} </h5>
        <span> {{ user.email }} </span>
      </user-list>
  </div>

    <button @click="previousPage">Atras</button>
    <button @click="nextPage">Adelante</button>

    <span>Pagina {{ currentPage }} </span>

</template>

<script>
import useUsers from './../composables/useUsers.js';
import UserList from './../components/UserList.vue';
export default {
    components: {
        UserList
    },
    setup(){
        const { 
            currentPage,
            errorMessague,
            isLoading,
            users,
            nextPage,
            previousPage
        } = useUsers();

        return {
            currentPage,
            errorMessague,
            isLoading,
            users,

            nextPage,
            previousPage
        }
    }

}
</script>

<style scoped>
    h2{
        text-align: center;
        width: 100%;
    }

    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul{
        width: 250px;
    }
</style>