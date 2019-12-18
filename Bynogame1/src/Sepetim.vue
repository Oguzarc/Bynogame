<template>
  <div id="app" >
      <Header/>
      <sepet/> 
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import sepet from './components/sepet.vue'


export default {
  name: 'oyunlar',
  components: {   
    Header,
    altkısım,
    sepet
  }
}
</script>

<style scoped>

</style>
