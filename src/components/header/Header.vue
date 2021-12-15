<template>
    <div class="header">
        <div class="header-logo">
            <img class="logo-shop" src="../../assets/logo.png" width="80px" height="80px"> 
        </div>
        <div class="header-middle">
            <h2 v-if="$root.state.shopName === ''">Welcome guest</h2>
            <h2 v-if="$root.state.shopName !== ''">{{$root.state.shopName}}</h2>
        </div>
        <div class="header-login">
            <div v-if="$root.state.shopToken === ''">
                <router-link to="./login" ><button class="btn-login"><b>Login</b></button></router-link>
            </div>
            <div v-if="$root.state.shopToken !== ''" >
                <button class="btn-login" @click="haddleLogout"><b >Logout</b></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
 
        }
    },
    methods:{
        haddleLogout(){
 
            console.log("haddleLogout")
            this.$root.state.shopToken = '',
            this.$root.state.shopName = '',
            this.$root.state.shopDesc = '',
            this.$root.state.shopPhoto = '',
            this.$root.state.shopCategory = '',
            this.$root.state.shopEmail = ''
        }
    }
}
</script>

<style scoped>
.header{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100px;
    background-color: #1e3246;
    color: white
}

.header-logo{
    text-align: center;
}

.header-middle{
    text-align: center;
}

.header-login{
    text-align: center;
}

.logo-shop{
    margin-top: 5px;
}

.btn-login{
    margin-top: 25px;
    font-size: 30px;
    background-color: #1e3246;
    border: none;
    color: white;
}

.btn-login:hover{
    width: 100%;
    border: 3px solid white;
    border-radius: 30px;
}
</style>