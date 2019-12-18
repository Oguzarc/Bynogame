<template>
  <div class="boyut">
     
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <div 
        v-for="(post, index) in posts"
        v-bind:item="posts"
        v-bind:index="index"
        v-bind:key="post._id"
        >
        <b-carousel-slide  :img-src="post.resim">
          
        </b-carousel-slide>
    </div>
    </b-carousel>

    
  </div>
</template>
<script>
import resim from '../resimler';

export default {
  name: 'İlkitemicerik',
  data() {
    return {
      posts:[],
    }
  },
  async created() {
    try{
      this.posts = await resim.getPosts(); 
    }catch(err){
      this.error = err.message;
    }
  },
}
</script>
<style scoped>

.carousel .item {
  height: 500px;
}

.item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 500px;
}

.boyut{
  margin-right: auto;
  margin-left: auto;
  width: 85%;
  margin-top: 80px;
}

</style>
