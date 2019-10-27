<template>
  <div >
      <Header/>
      <!--<Giris/>-->
      <odeme/>
      <altkisim/>

  </div>
</template>

<script>

import Header from './components/girisheader.vue'
import Giris from './components/girisyap.vue'
import altkisim from './components/altkisim.vue'
import odeme from './components/odeme.vue'

export default {
  name: 'app',
  components: {   
    Header,
    Giris,
    altkisim,
    odeme
  }
}
</script>

<style>

</style>
