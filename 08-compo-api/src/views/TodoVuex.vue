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

  <button @click="toggleModal">Crear Todo</button>
  <modal v-if="isOpen"
    title="yuju"
    @on:close="toggleModal"
   >
      <template v-slot:form>
          <form
            @submit.prevent="createTodo( newTodoRef ); isOpen = false"
          >
            <h2>Formulario de registro</h2>
            <input 
                type="text" 
                placeholder="Escriba su nueva tarea"
                v-model="newTodoRef"
            />


            <br />
            <hr />
            <input 
                type="submit"
                value="enviar"
            />
           </form>

           <button @click="toggleModal">Salir</button>
      </template>
  </modal>
  <!--Modal-->
    <!--
        Formulario
        submit.prevent
        input
        mutation: crearTodo()
    -->

</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import useTodos from './../composables/useTodos.js';
// import Modal from './../components/Modal.vue';

export default {
  components:{
    Modal: defineAsyncComponent( () => import(/* webpackChunkName: "modal" */ './../components/Modal.vue')),
  },
  setup(){

    const isOpen = ref( false );

    const { currentTab, pending, allTodos, completed, getTodosByTag, toggleTodo, createTodo } = useTodos();


    return{
      allTodos,
      completed,
      createTodo,
      currentTab,
      getTodosByTag,
      isOpen,
      pending,
      newTodoRef: ref(''),
      toggleTodo,

      toggleModal: () => isOpen.value = !isOpen.value
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
    margin: 1rem 0;
  }

  .actived{
    background-color: #2c3e50;
    color: #ffffff;
  }

  .completed{
    text-decoration: line-through;
  }

  input[type="submit"]{
    cursor: pointer;
  }
</style>