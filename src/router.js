import VueRouter from 'vue-router'
import Home from './components/home/Index.vue'
import ListProduct from './components/showallproduct/ListProduct.vue'
import Login from './components/login/Login.vue'
import AllShop from './components/allshop/AllShop.vue'
import AddProduct from './components/addProduct/AddProduct.vue'


const routes = [
    {path: '/', component: Home},
    {path: '/allproduct', component: ListProduct},
    {path: '/login', component: Login},
    {path: '/allshop', component:AllShop},
    {path: '/addproduct',component: AddProduct}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router