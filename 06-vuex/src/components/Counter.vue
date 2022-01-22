<template>
    <h1>Counter - vuex</h1>

    <h3>Direct - Access: {{ $store.state.counter.count }} </h3>

    <button @click="increment">+1</button>
    <button @click="incrementFive">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">random</button>

    <h3>Is isLoading {{ isLoading }} </h3>
    <h3>Computed: {{ countComputed }} </h3> 
    <h3>mapState</h3>
    <h3>mapState: {{ count }} </h3>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {

    // computed: {
    //     countComputed(){
    //         return this.$store.state.count
    //     },
    //     ...mapState(['count'])
    // }

    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        // ...mapState({
        //     count: state => state.count,
        //     isLoading: state => state.isLoading
        // })
        ...mapState( 'counter', ['count', 'isLoading'])
    }, 
    methods: {
        increment(){
            this.$store.commit('counter/increment');
        },
        incrementFive(){
            this.$store.commit('counter/increment', 5)
        },
        // incrementRandom(){
        //     this.$store.dispatch( 'incrementRandomInt' )
        // }
        ...mapActions('counter' , ['incrementRandomInt'])
    }

    // computed: mapState(['count'])


}

</script>