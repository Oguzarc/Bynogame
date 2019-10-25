<template>
  <div id="app" >
      <Header/>
      <Slider/>
      <Tabmenu/>
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tabmenu from './components/Tabmenu.vue'
import Slider from './components/Slider.vue'
import altkısım from './components/altkısım.vue'


export default {
  name: 'app',
  components: {   
    Header,
    Tabmenu,
    Slider,
    altkısım
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top:0px;
  
}
</style>
