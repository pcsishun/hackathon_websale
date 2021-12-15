<template>
  <div class="shop-desc">
    <div class="shop-desc-set-desc" v-if="$root.state.shopDesc !== ''">
        <h4>{{ $root.state.shopDesc }}</h4>
    </div>
    <div class="shop-desc-set-desc" v-if="$root.state.shopDesc === ''">
      <div class="set-login-desc">
        <router-link to="/login" class="set-menu click-menu"><button class="set-menu"><b>Login</b></button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shop-desc{
    border: 5px solid rgb(94, 94, 94);
    border-radius: 30px;
    height: 100px;
    margin-top: 1%;
}

.shop-desc-set-desc{
  margin-left: 10px;
}

.set-login-desc{
  text-align: center;
  margin: auto
}

.click-menu .set-menu{
    background-color:#2b4661 !important;
    height: 60px;
    border: none;
    border-radius: 50px;
    color: white;
    width: 100px;
    margin-top: 10px;
    
}

 
</style>