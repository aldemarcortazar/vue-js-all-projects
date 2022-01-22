// voy a crear la aplicacion

const app = Vue.createApp({
    template: `
        <h1>Hola mundo desde vue js</h1>
        <p>{{1 + 1}}</p>
        <h3> {{quote}} </h3>
        <blockquote> -{{ author }} </blockquote>
        <button v-on:click="changeQuote">
            change quote
        </button>
    `,
    data(){
        return {
            message: 'hola mundo',
            quote: "i'm batman",
            author: 'bruce waine'
        }
    },
    methods: {
        changeQuote(){
            console.log('hello world !!! de nuevo');
            //cambiar state
            this.autor = "Aldemar Niño Cortazar";
            this.capitalize();
        },
        capitalize(){
            this.quote= this.quote.toUpperCase()
        }
    },

});

app.mount('#myApp');

/*******
 * el metodo data es el que va a representar el state de nuestra app
 * o de nuestro componente individual.
 */
/***
 * 
 * el option api es que se le declara muchas opciones dentro del objecto de crate app
 * y el composition api es que se le declara un metodo setup y sha perro
 */