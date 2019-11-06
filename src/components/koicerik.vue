<template>
<div class="boyut">
    <div class="cont">
        <div class="knight-online-texts">
            <h3 class="text-center mb-4" style="font-weight: 800; font-size: 24px">Knight Online</h3>
        </div>
        <!--ilk sıra -->      
    <b-card-group deck>
        <a href="/Oyunlar/knight-online">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/knight-gold-bar.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                 Knight Online Gold Bar
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
            <b-card
            img-src="https://images.bynogame.com/images/transcons/knight-premium-cash.png"
            img-alt="Image"
            img-top
            style="max-width: 20rem;" >
            <b-card-text align="center">
            Knight Online Premium ve Cash
            </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/knight-online-item3.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                item
                </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/knight-cypher-ring.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                  Cypher Ring
                </b-card-text>
            </b-card>
        </a>     
    </b-card-group>
    <!--2. sıra --> 
    <b-card-group deck class="mt-3">
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/knightonlinesteam1.png"
                img-alt="Image"
                img-top
                style="max-width: 17rem;" >
                <b-card-text align="center">
                 Steam Knight Online Cüzdan Kodu
                </b-card-text>
            </b-card>
        </a>  
    </b-card-group>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }
  }
</script>

<style scoped>
 .boyut{
    width:85%;
    justify-content: center;
    margin-left: 10%;
    margin-top:80px;
 }
 .cont{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
 }
 .cont a{
    color: black;
    text-decoration: none !important;
 }
 .cont a:hover{
    color:red;
    transition: color .2s;
 }

</style>