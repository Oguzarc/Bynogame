<template>
  <div id="app" >
      <Header/>
      <goldicerik/> 
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import goldicerik from './components/goldicerik.vue'


export default {
  name: 'oyunlar',
  components: {   
    Header,
    altkısım,
    goldicerik
  }
}
</script>

<style scoped>

</style>
