<template>
    <div class="home">
        <div class="mid-page">
            <div class="navbar-tab">
                <TabBar/>
            </div>
            <div class="body-tab-bar">
                <ProductList/>
            </div>
            
        </div>
        <div class="botton-page">
            <h1>Shop description:</h1>
            <ShopDesc/>
        </div>
    </div>
</template>

<script>
import TabBar from './navbar/TabBar.vue'
import ProductList from './menubar/ProductList.vue'
import ShopDesc from './shopdesc/ShopDesc.vue'
import axios from 'axios'

export default {
    components:{
        TabBar,
        ProductList,
        ShopDesc
    },
    methods:{
        getDataAuth(){
      axios.get("https://camt-shopapi.pair-co.com/myshop", {
        headers:{
          "Authorization": "Bearer " + this.$root.state.shopToken
        }
      })
      .then((res) => {
        console.log(res.data)
        this.$root.state.shopName = res.data.name
        this.$root.state.shopDesc = res.data.description
        this.$root.state.shopCategory = res.data.category
        this.$root.state.shopEmail = res.data.email
        this.$root.state.shopPhoto = res.data.photo
      })
      }
    },
    mounted(){
        this.getDataAuth()
    }
}
</script>

<style scoped>

.body-tab-bar{
    height: 550px;
    
}

.body-tab-bar{
    border: 5px soild rgb(145, 139, 139);
}

.botton-page{
 width:95%;
 height: 100px;
 margin: auto;
 border-radius: 30px;
}
</style>