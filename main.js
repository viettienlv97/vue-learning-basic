// const app = Vue.createApp({
//     template:`
//         <h2>{{message}}</h2>
//         <h2>Tên tôi là {{fullName}}</h2>
//         <h2>Tuổi: {{age}}</h2>
//         <h2>Tuổi: {{age}}</h2>
//         <h2>Địa chỉ: {{address}}</h2>
//         <h1>Level: {{level}}</h1>
//         <button v-on:click="onChange, changed=!changed">Change</button>
//         <span v-html="rawHtml" v-if="changed"></span>
//         `,
//     data(){
//         return {
//             message: 'Xin chào',
//             fullName: 'Việt Tiến',
//             age: 25,
//             address: 'HN',
//             level: 100,
//             rawHtml: '<span style="color: red">This should be red.</span>',
//             changed: true
//         }
//     },
//     methods:{
//         onChange(){
//             this.message = 'Không xin chào'
//             this.fullName = 'Tiến Việt'
//             this.age = 25.5
//             this.address = 'NVC'
//             this.level++ 
//         }
//     }
// })

// app.mount('#contact')