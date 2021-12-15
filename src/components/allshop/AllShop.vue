<template>
  <div class="all-shop-container">
    <div class="list-product">
        <div class="botton-control">
            <router-link to="/"><button class="btn btn-outline-secondary btn-setting"><b>Home</b></button></router-link>
        </div>
        <div class="underline-hr">
            <hr>
            <div class="product-set-loop" v-if="allShop !== null">
                <div v-for="(data,idx) in allShop" :key=idx>
                    <div class="shop-card">
                        <div class="shop-img">
                            <img :src="data.photo" width="100" height="100">
                        </div>
                        <div class="shop-detail">
                            <div class="shop-name">
                                <h5>{{data.name}}</h5>
                            </div>
                            <div class="shop-cate">
                                <p>{{data.category}}</p>
                            </div>
                            <div class="shop-desc">
                                <p>{{ data.description.slice(0,21) }}</p>
                            </div>
                            <button class="btn btn-primary">Visit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-set-loop" v-if="allShop === null">
            <h2>Now Loading...</h2>s
            </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
    data(){
        return{
            allShop:null, 
        }
    },
    methods:{
         fetchAllShop(){

                fetch(`https://camt-shopapi.pair-co.com/shops/`,{
                    headers:{
                        "Access-Control-Allow-Origin": "*",
                         "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then((data) => {
                    console.log(data.data)
                    this.allShop = data.data
                    })
         }
    },
    mounted(){
        this.fetchAllShop()
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

.all-shop-container{
    margin-top: 1%;
}

.product-set-loop{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    
}

.shop-card{
    background-color: rgb(104, 107, 109);
    border-radius: 30px;
    height:300px;
    text-align: center;
}

.shop-img{
    padding-top: 10px;
}

.shop-detail{
    padding-top: 30px;
    width: 90%;
    margin: auto
}

.btn-primary{
    width: 90%;
}
</style>