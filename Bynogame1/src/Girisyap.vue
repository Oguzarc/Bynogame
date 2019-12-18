<template>
  <div >
      <Header/>
      <Giris/>
      <altkisim/>

  </div>
</template>

<script>

import Header from './components/girisheader.vue'
import Giris from './components/girisyap.vue'
import altkisim from './components/altkisim.vue'

export default {
  name: 'girisyap',
  components: {   
    Header,
    Giris,
    altkisim,
  }
}
</script>

<style>

</style>
