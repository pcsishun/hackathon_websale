<template>
  <div id="app">
    <Header class="header"/>
    <router-view/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      dataAuth:'',
    }
  },
  methods:{
 
  },
  mounted(){
 
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: rgb(241, 241, 241)
}
 
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
 
   background-color: #1e3246;
   color: white;
   text-align: center;
   height: 50px;
}
</style>
