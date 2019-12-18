<template>
  <div id="app" >
      <Header/>
      <oicerik/> 
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import oicerik from './components/koicerik.vue'


export default {
  name: 'oyunlar',
  components: {   
    Header,
    altkısım,
    oicerik
  }
}
</script>

<style scoped>

</style>
