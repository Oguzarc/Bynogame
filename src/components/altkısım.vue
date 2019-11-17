<template>
  <div class="boyut">
    <div class="vld-parent" style="z-index:99999">
        <loading :active.sync="isLoading" 
        :is-full-page="fullPage"></loading>    
  </div> 
    <div class="ackapabutonu">
    <b-button v-b-toggle.collapse-2 class="m-1">Footer Butonu</b-button>
    </div>
    <div class="sabit">
        <b-collapse id="collapse-2">
        <!--Footer-->
      <div class="footer">
          <!--Footer_container-->
          <div class="footer_container">
            <!--genel bilgiler-->
            <div class="sıra">
              <div id="kutu">
                <h5>ByNoGame</h5>
                <ul>
                  <li><a href="#">Hakkımızda</a></li>
                  <li><a href="#">Yorumlar</a></li>
                  <li><a href="#">Ekinlikler</a></li>
                  <li><a href="#">Kariyer</a></li>
                  <li><a href="#">Sponsorluk Desteklerimiz</a></li>
                  <li><a href="#">Bir Fikrim Var!</a></li>
                </ul>
              </div>
            <!--kutu###-->
            <!--kutu-->
              <div id="kutu" style="margin-left:150px;">
                <h5>Alışveriş</h5>
                <ul>
                  <li><a href="#">Ödeme Seçenekleri</a></li>
                  <li><a href="#">Banka Hesap Numaralarımız</a></li>
                  <li><a href="#">Ödeme Yap(tım)</a></li>
                  <li><a href="#">Takas</a></li>
                  <li><a href="#">Bayiniz Olmak İstiyorum</a></li>
                  <li><a href="#">BNGPay Destekle</a></li>            
                </ul>
              </div>
            <!--kutu###-->
            <!--kutu-->
              <div id="kutu" style="margin-left:150px;">
                <h5>Üyelik</h5>
                <ul>             
                  <li><a href="#">Üye Adı/Şifremi Unuttum</a></li>
                  <li><a href="#">Bilgilerim</a></li>
                  <li><a href="#">Destek Taleplerim</a></li>
                  <li><a href="#">Siparişlerim</a></li>
                  <li><a href="#">Güvenlik</a></li>
                  <li><a href="#">Hesap Silme</a></li>
                </ul>
              </div>
              <div id="kutu" style="margin-left:150px;">
                <h5>Yardım</h5>
                <ul>              
                  <li><a style="cursor:pointer" @click="goSSS" >S.S.S</a></li>
                  <li><a href="#">Canlı Destek</a></li>
                  <li><a href="#">Gizlilik Politikası</a></li>
                  <li><a href="#">Üyelik ve Hizmet Sözleşmesi</a></li>
                  <li><a href="#">Hizmet Alım Satım Sözleşmesi</a></li>
                </ul>
              </div> 
            </div>     
            <!--sosyal medya ikonlar-->
            <div class="sıra">
              <div class="sosyal">
                <a href="https://instagram.com/bynogame/" title="instagram" rel="noopener" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/bynogame" title="Facebook" rel="noopener" target="_blank"><i class="fa fa-facebook"></i></a>
                <a href="https://www.twitch.tv/bynogame" title="Twitch" rel="noopener" target="_blank"><i class="fa fa-twitch" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/bynogame" title="YouTube" rel="noopener" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                <a href="https://twitter.com/bynogame" title="Twitter" rel="noopener" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/bynogame" rel="noopener" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://play.spotify.com/user/bynogame" rel="noopener" title="spotify" target="_blank"><i class="fa fa-spotify"></i></a>
                <a href="http://smarturl.it/bynogame" rel="noopener" title="playz" target="_blank" style="width: 20px; height: 20px">
                <img src="https://cdn.bynogame.com/site-images/playz_logo.svg" style="width: 100%; height: 100%" alt=""></a> 
                <a href="https://www.dmca.com/Protection/Status.aspx?ID=254c4319-930b-4610-9745-7f9ea70c6115&amp;refurl=https://www.bynogame.com/tr" title="DMCA.com Protection Status" > <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=254c4319-930b-4610-9745-7f9ea70c6115" alt="DMCA.com Protection Status"></a>            
              </div>
            </div>
            <!--iletişim kısmı-->
            <div class="sıra">
              <p class="iletişim">ByNoGame Bilişim LTD. (bynogame.com) info@bynogame.com Tel: 0 850 600 00 30          
              </p>
            </div>
            <br>       
            <p class="iletişim2"><span class="iletişim-span">
                <a href="https://www.bynogame.com/Sozlesme/Uyelik-Sozlesmesi">Üyelik Sözleşmesi</a>
                </span>
                <span class="iletişim-span">
                  <a href="https://www.bynogame.com/Sozlesme/Gizlilik-Politikasi"> Gizlilik Politikası</a>
                  </span>
                  <span>
                    <a href="https://www.bynogame.com/Sozlesme/Alim-Satim-Sozlesmesi"> Hizmet Alım Satım Sözleşmesi</a>
                  </span>
            </p>       
            </div>
            <!--Alt resimler-->
            <div class="sıra">
              <div class="odeme_ikon">
                <img data-original="https://images.bynogame.com/new_red2/footer/small/ssl-secure.png" alt="payment" src="https://images.bynogame.com/new_red2/footer/small/ssl-secure.png" style="display: inline;">
                <img data-original="https://images.bynogame.com/new_red2/footer/small/troy_logo1.png" alt="troy" src="https://images.bynogame.com/new_red2/footer/small/troy_logo1.png" style="display: inline;"> 
                <img data-original="https://images.bynogame.com/new_red2/footer/small/card-visa.png" alt="visa" src="https://images.bynogame.com/new_red2/footer/small/card-visa.png" style="display: inline;">
                <img data-original="https://images.bynogame.com/new_red2/footer/small/card-mastercard.png" alt="mastercard" src="https://images.bynogame.com/new_red2/footer/small/card-mastercard.png" style="display: inline;">
                <img data-original="https://images.bynogame.com/new_red2/footer/small/atm-machine-sign-hi.png" alt="atm" src="https://images.bynogame.com/new_red2/footer/small/atm-machine-sign-hi.png" style="display: inline;"> 
                <img data-original="https://images.bynogame.com/new_red2/footer/small/mobile-payments-2-512.png" alt="mobile payment" src="https://images.bynogame.com/new_red2/footer/small/mobile-payments-2-512.png" style="display: inline;">
              </div>
            </div>
          </div>
      </b-collapse>
    </div>
   </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            goSSS() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/iletisim/SSS');
                },1000)
            }
          }
}
</script>

<style scoped>
.footer { 
  background:#e2e2e2;
  width:100%; 
  height:auto;
  color:#364050; 
  font-size:15px;
  font-family:arial;
  display: block;
  }
  
.footer #kutu b {
  font-size:14px;
  }
* {
  margin:0px;
  padding:0px;
  }
.footer_container{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  padding-top: 1em;
  align-items: center;
  }
ul {
  list-style-type:none;
  margin:17px 0;
  padding:0px;
  }
#kutu {
  width:auto; 
  height:auto; 
  float:left;
  }
ul li {
  float:left;
  font-family:tahoma; 
  font-size:12px;  
  clear:left; 
  color:#435064; 
  }
.sosyal {
  display: flex;
  font-size: 1.25em;
  flex-wrap: wrap;
  min-width: 15em;
  justify-content: space-between;
  margin-bottom: .5em;
}
.sıra{
  margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
}
.iletişim {
  font-size: 12px;
}
.iletişim2{
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.iletişim-span{
  border-right: 1px solid #435064;
  margin-right: 4px;
  padding-right: 4px;
}
/*en alt sıra resim style*/ 
.odeme_ikon{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.odeme_ikon img{
  margin: 1.5em .5em 0;
  max-width: 60px;
  max-height: 37px;
}
.boyut{
  margin-top:10px;
}
a{
  color:#364050 !important;
}
a:hover{
  color:#ed502f !important;
  transition: color .2s;
  text-decoration: none !important;
}
.ackapabutonu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 2em;
    margin-left: 2em;
    z-index: 99999;
}
.sabit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 2em;
    margin-left: 2em;
    z-index: 99998;
}
</style>