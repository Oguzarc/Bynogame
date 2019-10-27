<template>
    <div class="bolge1">
        <div class="sıra">
                <div class="col-12">
                    <p class="w-100" style="text-align: end;">Mevcut Bakiyeniz: 
                        <span style="font-size: 1.25em" id="odeme-sayfasi-bakiye"></span>
                        <span>TL</span></p>
                </div>
        </div>
        <div class="sıra">
            <div class="col-lg-12 col-sm-12">
                <h3 class="text-center mb-2">Ödeme Miktarı</h3>
                    <div class="para-cont">
                        <b-form-input placeholder="Miktar Giriniz" style="border:none !important; background-color:inherit !important;"  type="number" min="0"></b-form-input>.
                        <b-form-input id="para2-cont" placeholder="00" style="border:none !important; background-color:inherit !important;" maxlength="2"  type="text" min="0"></b-form-input>TL
                    </div>
                    <p class="ayırıcı d-flex justify-content-center">Öde 'ye Tıklayarak Fiyat Girebilir/Güncelleyebilirsiniz.</p>
            </div>
        </div>
        <div class="sıra">
            <div class="col-lg-12 col-sm-12">
                <h3 class="text-center mb-2">Ödeme Yöntemleri</h3>
                <div class="subhead text-center" style="font-size: 0.85em;margin-top: 1em;  margin-bottom: 2.5em">
                        Tercih Ettiğiniz Ödeme Yöntemini Seçiniz
                </div>                  
                <b-tabs  content-class="mt-3">
                    <b-tab title="Tümü" active>
                        <div class="ara-cont">
                         <input type="text" id="mySearch" onkeyup="kısıtlama()" placeholder="Arama yapabilirsiniz" title="Type in a category">
                         <i class="fa fa-search"></i>
                        </div>
                        <ul id="myMenu">
                            <li>
                                <div class="logolar">
                                    <div class="info" href="#">
                                      <i class="fa fa-info"></i>
                                    </div>
                                    <img src="https://images.bynogame.com/images/banka_logolar/bynogamekart.png" class="img-responsive" alt="">
                                </div>
                                <a href="#">Param ByNoGame</a>
                                <button type="button" class="funds-cta">
                                <span class="funds-btn">Öde</span></button>
                            </li>
                            <li>
                                <div class="logolar">
                                    <div class="info" href="#">
                                        <i class="fa fa-info"></i>
                                    </div>
                                    <img src="https://images.bynogame.com/images/banka_logolar/troy.png" class="img-responsive" alt="">
                                </div>
                                <a href="#">Kredi Kartı İle Ödeme Yap(Gpay)</a>
                                <button type="button" class="funds-cta">
                                <span class="funds-btn">Öde</span></button>
                            </li>
                            <li>
                                <div class="logolar">
                                    <div class="info" href="#">
                                        <i class="fa fa-info"></i>
                                    </div>
                                    <img src="https://images.bynogame.com/images/banka_logolar/ininal.png" class="img-responsive" alt="">
                                </div>
                                <a href="#">İninal Kart İle Ödeme Yap(Gpay)</a>
                                <button type="button" class="funds-cta">
                                <span class="funds-btn">Öde</span></button>
                                
                            </li>
                            <li>
                                <div class="logolar">
                                    <div class="info" href="#">
                                        <i class="fa fa-info"></i>
                                    </div>
                                    <img src="https://images.bynogame.com/images/banka_logolar/troy.png" class="img-responsive" alt="">
                                </div>
                                <a href="#">Kredi Kartı İle Ödeme Yap (Türkpara)</a>
                                <button type="button" class="funds-cta">
                                <span class="funds-btn">Öde</span></button>
                            </li>
                            <li>
                                <div class="logolar">
                                    <div class="info" href="#">
                                        <i class="fa fa-info"></i>
                                </div>
                                    <img src="https://images.bynogame.com/images/banka_logolar/troy.png" class="img-responsive" alt="">
                                </div>
                                <a href="#">Kredi Kartı İle Ödeme Yap (PAYU)</a>
                                <button type="button" class="funds-cta">
                                <span class="funds-btn">Öde</span></button>
                                </li>                                             
                        </ul> 
                    </b-tab>
                    <b-tab title="Kredi/Banka Kartı">
                    
                    </b-tab>
                    <b-tab title="Atm/Havale/EFT"><p></p></b-tab>
                    <b-tab title="E-Cüzdan"><p></p></b-tab>
                    <b-tab title="Diğer"><p></p></b-tab>
                </b-tabs>     
            </div>
        </div>
        <div class="wrapper live-chat-wrapper" style="cursor: pointer; width: 132px; height: 100px;">
        <div class="arrow_box">
            7 <img src="https://images.bynogame.com/images/kama-08.png" alt="kama" style="width:12px;"> 24 Çevrimiçi
        </div>
        <div class="chat-circle text-center">
            <img class="bng-chat-head" alt="chat head logo" src="https://cdn.bynogame.com/site-images/bynocan-kafa2-onizleme.png">
            <div class="intercom-badge animated bounce" style="display: none;color: #ed502f;
                                                                            font-size: 1.25em;
                                                                            font-weight: bolder;"></div>
        </div>
    </div>
    </div>   
</template>

<style scoped>

.bolge1 {
  width:75%;
  justify-content: center;
  margin-left: 10%;
  
}
/*para girme */ 
#para2-cont{
    width: 3em !important;
    min-width: 2em;
}
/*para bölgesi*/ 
.para-cont {
    align-items: center;
    border-bottom: 1px solid#334f69;
    color:#2e506a;
    display: flex;
    font-size: 1.5em;
    margin: 0 auto .25em;
    max-width: 400px;
}
/*sıraya sokma */
.sıra{
  margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
}
/*arama bölgesi*/
.ara-cont{
    align-items: center;
    border-bottom: 1px solid#334f69;
    color:#2e506a;
    display: flex;
    font-size: 1.5em;
    margin: 0 auto .25em;
}
.ara-cont i:hover{
    color:#ed502f;
    
}
/*ayırıcı yazı*/
.ayırıcı{
    align-items: center;
    color:#9e9e9e;
    text-transform: uppercase;
    font-size: 0.8em;
}
/*ref:w3school*/ 
 /* Style the search box */
#mySearch {
  width: 100%;
  font-size: 18px;
  padding: 11px;
  border: 1px solid #ddd;
  background-color: inherit;
  border:none;
}

/* Style the navigation menu */
#myMenu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Style the navigation links */
#myMenu li a {
  padding: 12px;
  text-decoration: none;
  color: black;
  display: block;
  margin-top: 8px;
  background-color: white;
  font-size: 14px;
  margin-left: 8%
}
ul{
    position: relative;
    height:auto;
    max-height: 150px;
    overflow-y:scroll;
}
/*Öde butonları stili*/
.funds-cta{
    position:absolute;
    background-color:#fff;
    border: 1px solid#ddd !important;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .14) !important;
    margin-top: -40px;
    margin-left: 90%
}
.funds-btn{
    color:#ed502f;
    cursor: pointer;
    display: block;
    padding: 4px 18px;
}
/*soldaki ikonlar*/
.logolar{
    position:absolute;
    margin-right: 10px;
    min-width: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: white;
    height: 45px;
}
.logolar img{
    display: inline;
    max-height:2em;
    cursor: pointer;
}
.info{
    align-items: center !important;
    border: solid 2px
    #d1d1d1 !important;
    border-radius: 50px !important;
    display: inline-flex !important;
    height: 12px !important;
    justify-content: center !important;
    margin-right: 8px !important ;
    padding: 9px !important;
    width: 12px !important; 
}
.info i:hover{
    color:#ed502f;
    transition: .2s;
}
.arrow_box{
    font-size: 14px;
position: relative;
max-width: 125px;
border-radius: 1em;
padding: 5px;
border: 1px solid
#ed502f;
display: flex;
align-items: center;
background:
#f5f5f5;
}
.chat-circle{
    margin-top: 1.2em;
border: 1px solid
#ed502f;
border-radius: 50%;
max-width: 80px;
padding: .5em;
height: 80px;
background-color:
#f5f5f5;
}
.bng-chat-head{
    max-width: 54px;
margin-right: .3em;
margin-left: .2em;
margin-top: -.2em;
}
.live-chat-wrapper{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
right: 0;
bottom: 2em;
margin-right: 2em;
z-index: 99999;
}
</style>