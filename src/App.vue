<template>
  <div id="app">
    <Apphead></Apphead>
    <router-view/>
  </div>
</template>

<script>
import Apphead from "./components/Apphead"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Apphead
  },
  created(){

  },
  methods:{

  }
}
</script>

<style>
*{
  user-select:none;
}
html,body{
  margin: 0;
  padding:0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
