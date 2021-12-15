<template>
<div class="list-product-container">
    <div class="list-product">
        <div class="botton-control">
            <router-link to="/"><button class="btn btn-outline-secondary btn-setting"><b>Home</b></button></router-link>
            <button class="btn btn-outline-secondary btn-setting"><b>Add Product</b></button>
            <span class="btn-slice">
                <span class="menu-slice" v-for="(data, idx) in productList" :key="idx">
                    <button class="btn-selection" @click="fetchAllProduct(8, idx+1)"><b>{{idx+1}}</b></button>
                </span>
            </span>
        </div>
        <div class="underline-hr">
            <hr> 
            <div class="all-product-set" v-if="productList !== null">
                <div class="product-card-set" v-for="(data, idx) in productList" :key="idx">
                    <div class="product-img">
                        <img class="product-img-sub" :src="data.photo" width="150" height="150">
                    </div>
                    <div class="product-content">
                        <div class="product-name"><h5>{{data.name}}</h5></div>
                        <div class="product-desc">{{data.description}}</div>
                        <div class="product-price"><h4>{{data.price}} THB</h4></div>
                    </div>
                    <div class="btn-submit">
                        <button class="btn btn-secondary">Buy</button>
                        <button class="btn btn-secondary">Visit</button>
                    </div>
                </div>
            </div>
            <div class="ll-product-set" v-if="productList === null">
                <h1>Now Loading...</h1>
            </div>
            <br>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            productList: null,
            shopToken: this.$root.state.shopToken,
            pageLimit: 8,
            pageRunning: 1,
        }
    },
    methods:{
        fetchAllProduct(limitpage, pageSelection){
            axios.get(`http://localhost:8080/products?limit=${limitpage}&page=${pageSelection}`)
            .then(res => {
                this.productList = res.data.data
            })
        }
    },
    mounted(){
        this.fetchAllProduct(this.pageLimit, this.pageRunning)
    }
}
</script>

<style scoped>
.list-product{
    border: 5px solid rgb(94, 94, 94);
    border-radius: 30px;
    width: 90%;
    margin: auto;
    height: 780px;
}
.botton-control{
    margin-top: 20px;
    margin-left: 20px;
}

.btn-setting{
    margin-left: 20px;
    width: 10%;
}

.underline-hr{
    width: 90%;
    margin: auto;
}

.list-product-container{
    margin-top: 1%;
}

.product-img{
    padding-top: 20px;
    border-radius: 30px;
}
.product-img-sub{
    border-radius: 30px;
}
.all-product-set{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 30px;
    text-align: center;
}

.btn-secondary{
    margin-left: 10px;
}

.product-card-set{
    background-color: rgb(104, 107, 109);
    border-radius: 30px;
}
.btn-submit{
    margin-top: 10px;
    margin-bottom: 20px;
}
.menu-slice{
    text-align: center;
    margin: auto;
}

.btn-selection{
    border:2px solid #1e3246;
    border-radius: 50%;
    margin-left: 5px;
}

.btn-selection:hover{
    background-color: #1e3246;
    color: wheat
}
.set-btn-bb{
    margin: auto;
    text-align: center;
}

.btn-slice{
    margin-left: 20rem;
}
</style>