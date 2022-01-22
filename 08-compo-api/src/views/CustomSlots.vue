<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

    <modal 
        v-if="isOpen"
        title="hellow"
        @on:close="closeModal"
    >

        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>

        <template>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.! </p>
        </template>

       <template v-slot:header>
           <h2>Titulo del Header...</h2>
       </template>

        <template v-slot:exposed="{ newTitle }">
            <h2> {{ newTitle }} </h2>
        </template>

    </modal>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
export default {
    components: {
        Modal: defineAsyncComponent( () => import( /* webpackChunkName: "Modal" */ './../components/Modal.vue' ) ),
    },
    setup(){

        const isOpen = ref( false );

        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>