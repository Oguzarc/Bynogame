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
  name: 'anasayfa',
  components: {   
    Header,
    Tabmenu,
    Slider,
    altkısım
  }
}
</script>

<style scoped>

</style>
