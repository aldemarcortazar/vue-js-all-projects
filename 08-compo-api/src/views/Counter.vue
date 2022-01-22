<template>
    <h2>Counter view</h2>
    <h3> {{ counter }} </h3>

    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</template>

<script>

import useCounter from '@/composables/useCounter.js';
export default {
    name: 'counter',
    setup() {
       
        const { counter, increase, decrease } = useCounter( 12 );

        return{
            counter,
            decrease,
            increase
        }
    },
}
</script>

<style scoped>

</style>
