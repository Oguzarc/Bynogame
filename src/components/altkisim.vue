<template>
  <div class="boyut">
    <!--Footer-->
   <div class="footer">
      <!--Footer_container-->
      <div class="footer_container">
                
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
   </div>
</template>

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
</style>