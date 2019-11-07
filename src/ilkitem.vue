<template>
  <div id="app" >
      <Header/>
      <ilkitem/> 
      <altkısım/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import ilkitem  from './components/ilkitemicerik.vue'


export default {
  name: 'oyunlar',
  components: {   
    Header,
    altkısım,
    ilkitem
  }
}
</script>

<style scoped>

</style>
