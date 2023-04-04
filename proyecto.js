const app = new Vue({
    el: '#app',
    data: {
        titulo: 'proyecto',
        aparece: true,
        num1: 5,
        num2: 5,
        numeros: ['Uno', 'Dos', 'Tres'],
        arrayFrutas:
            [
                {
                    name: "manzana",
                    price: "$1.00",
                    description: "una manzana"
                },
                {
                    name: "Pera",
                    price: "$2.00",
                    description: "una pera"
                },
                {
                    name: "Naranja",
                    price: "$3.00",
                    description: "una Naranja"
                }
            ],

        lenguajes:
            [
                {
                    nombre:"Gmail",
                    link:"https://mail.google.com/",
                    puntos: 0
                },
                {
                    nombre:"hotmail",
                    link:"https://outlook.live.com/",
                    puntos: 0
                }
            ],
        nuevoLenguaje:'',
        nuevoLink:'',
        nuevoPunto:0,
        total: 0
        
    },
    methods:{
        agregarLenguaje(){
            this.lenguajes.push({nombre:this.nuevoLenguaje,link:this.nuevoLink,puntos: this.nuevoPunto})
            this.nuevoLenguaje= '';
            this.nuevoLink='';
        }
    },
    computed:{
        sumarTodo(){
            this.total=0;
            for(lenguaje of this.lenguajes){
                this.total= this.total + lenguaje.puntos;
            }
            return this.total
        }
        
    }
}) 