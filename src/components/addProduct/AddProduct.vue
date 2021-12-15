<template>
<div class="add-product-container">
    <div class="botton-control">
                <router-link to="/"><button class="btn btn-outline-secondary btn-setting"><b>Home</b></button></router-link>
            </div>
    <hr>
    <div class="add-product">
        
        <div class="form-add-product">
            
            <form @submit.prevent="haddleAddProduct">
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="file" name="imagesArray" @change="onChange">
                </div>
                <div class="form-group">
                    <label for="productname">Product Name</label>
                    <input type="text" class="form-control"  v-model="setName" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Product Description</label>
                    <input type="text" class="form-control" v-model="setDesc" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Product Price</label>
                    <input type="text" class="form-control" v-model="setPrice" required>
                </div>
                    <br>
                    <div class="btn-on-submit">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
            </form>
        </div>
    </div>
</div>
    
</template>

<script>
// "Content-Type" : "multipart/form-data",
import axios from 'axios'
export default {
    data(){
        return{
            imagesArray: null,
            setName: '',
            setDesc: '',
            setPrice: '',

        }
    },
    methods:{
        onChange(event){
            this.imagesArray = event.target.files[0]
        },
        haddleAddProduct(){
            const formData = new FormData()
            formData.append('imagesArray', this.imagesArray, this.imagesArray.name)

            const dataIn = {
                name: this.setName,
                description: this.setDesc,
                price: this.setPrice,
                photo: ''
            }

            axios.post("https://camt-shopapi.pair-co.com/products",dataIn,{
                heaeder:{
                    "Content-Type" :"multipart/form-data",
                    "Authorization" : "Bearer "+this.$root.state.shopToken,
                }
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })


        }
    },
    mounted(){
        console.log(this.$root.state.shopToken)
    }
}
</script>

<style scoped>
.add-product{
   margin: auto;
     width: 50%;
}

.add-product-container{
  margin-top: 3%;
}

.btn-on-submit{
    text-align: center;
}

.botton-control{
    margin-top: 20px;
    margin-left: 20px;
}


</style>

