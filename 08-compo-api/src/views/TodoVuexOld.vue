<template>
  <h1>Lista de tarea de thanos.</h1>
  <!-- <h4>Tareas: {{  $store.state.todos.length }} </h4> -->
  <h4>Pendientes: {{ pending.length }} </h4>

  <hr />
  <button 
    :class=" { 'actived': currentTab === 'all' } "
    @click=" currentTab = 'all' "

  >
    Todos
  </button>
  <button 
    :class=" { 'actived': currentTab === 'pending' } "
    @click=" currentTab = 'pending' "
  >
    Pendientes
  </button>
  <button 
    :class=" { 'actived': currentTab === 'completed' } "
    @click=" currentTab = 'completed' "
  >
    completed
  </button>


  <div>
    <ul>
      <li v-for="todo in getTodosByTag" :key="todo.id"
        :class=" { 'completed': todo.completed } "
        @dblclick="toggleTodo( todo.id )"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup(){

    const store = useStore();

    const currentTab = ref('all');

    return{
      currentTab,
      pending: computed( () => store.getters['pendingTodos'] ),
      allTodos: computed( () => store.getters['allTodos'] ),
      completed: computed( () => store.getters['completedTodos'] ),
      getTodosByTag: computed( () => store.getters['getTodosByTab'](currentTab.value) ),
      toggleTodo: ( id ) =>  store.commit('toggleTodo', id),
    }
  }
}
</script>

<style scoped>
  div{
    align-items: center;
    display: flex;
    justify-content: center;
  }

  ul{
    width: 300px;
    text-align: left;
  }

  li{
    cursor: pointer;
  }

  button{
    border: none;
    cursor: pointer;
  }

  .actived{
    background-color: #2c3e50;
    color: #ffffff;
  }

  .completed{
    text-decoration: line-through;
  }
</style>