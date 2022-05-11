<template>
  <router-view>   
  </router-view>
</template>

<script>
import Home from './view/Home.vue'
import AddPerson from './view/AddPerson.vue'
export default {
  components:{ Home, AddPerson }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
