<template>
  <div >
      <Header/>
      <odeme/>
      <altkısım/>

  </div>
</template>

<script>

import Header from './components/Header.vue'
import altkısım from './components/altkısım.vue'
import odeme from './components/odeme.vue'

export default {
  name: 'app',
  components: {   
    Header,
    altkısım,
    odeme
  }
}
</script>

<style>

</style>
