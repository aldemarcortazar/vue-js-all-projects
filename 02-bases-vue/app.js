const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

// voy a crear la aplicacion

const app = Vue.createApp({
    data(){
        return {
            quotes, 
            newQuote: 'Hola Mundo'
        }
    },
    methods: {
        addQuote(){
            this.quotes.unshift({
                quote: this.newQuote
            });
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