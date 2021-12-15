<template>
    <div class="bar-container">
        <div class="tab-bar">
            <router-link class="click-menu" to="/addproduct"><button class="set-menu"><b>Add Product</b></button></router-link >
            <router-link class="click-menu" to="/allproduct"><button  class="set-menu"><b>All Product</b></button></router-link >
            <router-link class="click-menu" to="/allshop"><button  class="set-menu"><b>All Shop</b></button></router-link >
            <router-link class="click-menu" to="/"><button  class="set-menu"><b>Profile</b></button></router-link >
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.bar-container{
    background-color:#2b4661;
    text-align: center;
    margin: auto;
}
.tab-bar{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10%;
    margin-left: 60px;
    margin-right: 60px

}
.click-menu .set-menu{
    background-color:#2b4661 !important;
    height: 60px;
    border: none;
    color: white;
}

 
.click-menu:hover{
    border: 3px solid white;
    border-radius: 30px;
}


 
</style>