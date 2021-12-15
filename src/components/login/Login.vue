<template>
    <div class="login-container">
        <div class="login-page">
            <div class="form-login-page" v-if="$root.state.shopToken === ''">
                <form @submit.prevent="haddleLogin">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="setEmail">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="setPassword">
                    </div>
                    <br>
                    <h6 v-if="isError !=='' ">{{isError}}</h6>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="form-login-page" v-if="$root.state.shopToken !== ''">
                <h2>Welcome user {{$root.state.shopName}}</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            setEmail: '',
            setPassword:'',
            isError: '',
        }
    },
    methods:{
        haddleLogin()
        {
            const loginForm = {
                email: this.setEmail,
                password:  this.setPassword
            }
            fetch('https://camt-shopapi.pair-co.com/login',{
                method:"POST",
                headers:{
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",  
                    },
                    body: JSON.stringify(loginForm),
                }).then(res=> res.json().then((data)=>{
                    console.log(data);
                    this.$root.state.shopToken = data.token
                    this.$router.push('./')

                    
                })).catch(err=>{
                    console.log(err.message)
                    this.isError = "invalid username or password"
                })
        }
    },
    mounted(){
    }
}
</script>

<style scoped>

.login-container{
    margin-top: 2%;
}

.login-page{
    width: 35%;
    text-align: center;
    margin: auto;
}
h6{
    color: red;
}
</style>