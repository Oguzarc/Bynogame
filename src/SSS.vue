<template>
  <div id="app" >
      <Header/>
      <icerik/>   
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import icerik from './components/sssbody.vue'


export default {
  name: 'oyunlar',
  components: {   
    Header,
    altkısım,
    icerik
  }
}
</script>

<style scoped>

</style>
