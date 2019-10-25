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
      <!-- Slide 1-->
      <b-carousel-slide  img-src="https://cdn.bynogame.com/site-images/%C3%A7ekili%C5%9F.jpeg">
      
      </b-carousel-slide>

      <!-- Slide 2 -->
      <b-carousel-slide img-src="https://cdn.bynogame.com/site-images/new_banners/2019-10-07/banner-08.jpg">
       
      </b-carousel-slide>

      <!-- Slide 3 -->
      <b-carousel-slide img-src="http://cdn.bynogame.com.s3.amazonaws.com/site-images/banners/metin2%20yang-01.jpg">
      
      </b-carousel-slide>

      <!-- Slide 4 -->
 
      <b-carousel-slide img-src="https://cdn.bynogame.com/site-images/new_banners/2019-10-07/banner-01.jpg">
      
      </b-carousel-slide>

      <!-- Slide 5 -->
      <b-carousel-slide img-src="https://cdn.bynogame.com/site-images/new_banners/banner%20son%202.jpg">
      
      </b-carousel-slide>

      <!-- Slide 6 -->
      <b-carousel-slide img-src="https://cdn.bynogame.com/site-images/new_banners/2019-10-07/banner-04.jpg">
      
      </b-carousel-slide>
    </b-carousel>

    
  </div>
</template>

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
