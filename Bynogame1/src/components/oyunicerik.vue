<template>
<div class="boyut">
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :is-full-page="fullPage"></loading>    
  </div>
    <div class="cont">
        <!--üst nav --> 
        <div class="mt-3">
      <b-pagination hide-goto-end-buttons  v-model="currentPage" :total-rows="rows" align="fill">
      </b-pagination>
        </div>
        <!--ilk sıra -->      
    <b-card-group deck>
        <a style="cursor:pointer" @click="goKO">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/knight-online.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                    Knight Online
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
            <b-card
            img-src="https://images.bynogame.com/images/transcons/csgo-skin.png"
            img-alt="Image"
            img-top
            style="max-width: 20rem;" >
            <b-card-text align="center">
            CS:GO Skin
            </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/vgo-skin.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                V-GO
                </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/league-of-legends.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                  League of Legends Riot Points
                </b-card-text>
            </b-card>
        </a>     
    </b-card-group>
    <!--2. sıra --> 
    <b-card-group deck class="mt-3">
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/bdo-kategori.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                 Black Desert Online
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
             <b-card
                img-src="https://images.bynogame.com/images/transcons/steam.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                    Steam
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
            <b-card
            img-src="https://images.bynogame.com/images/transcons/joypara.png"
            img-alt="Image"
            img-top
            style="max-width: 20rem;" >
            <b-card-text align="center">
            Joygame Para
            </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://cdn.bynogame.com/site-images/kategori/razer/urun_gorselleri-16.jpg"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                Tactic Force
                </b-card-text>
            </b-card> 
        </a>     
    </b-card-group>
    <!--3. sıra --> 
    <b-card-group deck class="mt-3">
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/point-blank.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                 Point Blank Tg Epin
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
             <b-card
                img-src="https://images.bynogame.com/images/fortnite-logo.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                    Fortnite
                </b-card-text>
            </b-card>
        </a>
        <a href="/">
            <b-card
            img-src="https://images.bynogame.com/images/transcons/oasis-games.png"
            img-alt="Image"
            img-top
            style="max-width: 20rem;" >
            <b-card-text align="center">
                Oasis-Games
            </b-card-text>
            </b-card> 
        </a>
        <a href="/">
            <b-card
                img-src="https://images.bynogame.com/images/transcons/legend-online.png"
                img-alt="Image"
                img-top
                style="max-width: 20rem;" >
                <b-card-text align="center">
                    Legend Online
                </b-card-text>
            </b-card> 
        </a>     
    </b-card-group>
    <div class="mt-5">
      <b-pagination  hide-goto-end-buttons v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>
    </div> 
</div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
        data() {
            return {
                rows: 100,
                currentPage: 1,
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            
            goKO(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Oyunlar/knight-online');
                },1000)
            },         
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