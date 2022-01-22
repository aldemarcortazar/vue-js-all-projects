import { computed,ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {

    const store = useStore();

    const currentTab = ref('all');

    return{
        currentTab,
        pending: computed( () => store.getters['pendingTodos'] ),
        allTodos: computed( () => store.getters['allTodos'] ),
        completed: computed( () => store.getters['completedTodos'] ),
        getTodosByTag: computed( () => store.getters['getTodosByTab'](currentTab.value) ),
        createTodo:  ( newTodoText ) => store.commit('createTodo', newTodoText) ,
        toggleTodo: ( id ) =>  store.commit('toggleTodo', id),
    }
}
export default useTodos;