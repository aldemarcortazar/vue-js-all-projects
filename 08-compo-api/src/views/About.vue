<template>
  <div class="about">
    <h1> {{ title }} </h1>

    <button @click="changeTitle" >  cambiar titulo </button>
  </div>
</template>

<script>
import { onActivated,
         onBeforeMount, 
         onBeforeUnmount, 
         onBeforeUpdate, 
         onDeactivated, 
         onErrorCaptured, 
         onMounted, 
         onRenderTracked, 
         onRenderTriggered, 
         onUnmounted, 
         onUpdated, 
         ref} from 'vue'

export default{

  name: 'About',
  setup(){


    const title = ref('About Page');

    onBeforeMount( () => {
      console.log('onBeforeMounted');
    });

    onMounted( () =>{
      console.log('onMounted');
    });

    onBeforeUpdate( () => {
      console.log('onBeforeUpdate');
    });

    onUpdated( () =>{
      console.log('onUpdated');
    });

    onBeforeUnmount( () => {
      console.log('onBeforeUnmounted');
    });

    onUnmounted( () => {
      console.log( 'onUnmounted' );
    });

    onErrorCaptured( () => {
        console.log( 'onErrorCaptured' );
    });

    onRenderTracked( () =>{
      console.log('onRenderTracked');
    });

    onRenderTriggered( () => {
      console.log('onRenderTriggered');
    });

    onActivated( () => {
      console.log( 'onActivacted' );
    });

    onDeactivated( () =>{
      console.log( 'onDeactivacted' );
    });

    return {
      title,
      changeTitle: () => title.value = 'new About'
    }

  },


}
</script>
