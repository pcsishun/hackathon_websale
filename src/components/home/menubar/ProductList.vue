<template>
  <div class="product-list-container">
    <div class="product-list">
      
      <div v-if="productList.length === 0">

      </div>
      <div v-if="productList.length !== 0">
        
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      productList:[],
      rangeOfData: null,
    }
  },
  methods:{
    listOfProduct(){
      axios.get(`https://camt-shopapi.pair-co.com/products/?limit=50&page=1`) 
      .then((res) => {
        this.rangeOfData = res.data.length;
        console.log(res.data)
      })
    }
  },
  mounted(){
    this.listOfProduct()

  }

}
</script>

<style scoped>
.product-list{
    margin-top: 15px;
    border: 5px solid rgb(94, 94, 94);
    height: 530px;
    border-radius: 30px;
    width: 95%;
    text-align: center;
    margin: auto;
}

.product-list-container{
  margin-top: 1%;
}
</style>