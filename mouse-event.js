const mouse = Vue.createApp({
    template:``,
    data(){
        return {
            // x: 0,
            // y: 0,
            message: 'hello',
            products:[
                {
                    thumb: './assets/p1.jpg',
                    name: 'Product A',
                    price: 200,
                    isCart: false
                },
                {
                    thumb: './assets/p2.jpg',
                    name: 'Product B',
                    price: 300,
                    isCart: false
                },
                {
                    thumb: './assets/p3.jpg',
                    name: 'Product C',
                    price: 100,
                    isCart: true
                },
            ]
        }
    },
    methods:{
        // onLogEvent(e,newX,newY){
        //     this.x = newX
        //     this.y = newY
        // },
        // onMouseMoveEvent(e){
        //     this.x = e.offsetX;
        //     this.y = e.offsetY
        // }
        onChangeCart(e,product){
            product.isCart = !product.isCart
        }
    },
    computed:{
        productPrice(e,number){
            return this.products.filter((product) => product.price < 300)
        }
    }
})

mouse.mount('#mouse')