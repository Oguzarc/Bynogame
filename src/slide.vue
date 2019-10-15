<template>
  <div id="app" >
      <Slider/>
      
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
export default {
  name: 'app2',
  components: {   
    Slider,
    
  }
}
</script>

<style scoped>
#app {
  
  margin-top:80px;
  
}
</style>
