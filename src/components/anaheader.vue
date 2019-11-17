<template>
<div>
  <!--üye-giriş kısmı-->
<b-modal id="modal-giris" hide-header hide-footer>
   <template>
    <div>
      <b-tabs  pills  align="center" >
        <div class="bolge1">       
              <b-tab title="Üye Girişi" active >
                <p>Sosyal medya hesaplarınızla <strong>HIZLI GİRİŞ</strong> yapabilirsiniz.</p>
                <div class="üstikonlar">
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-facebook"></i>
                    </a>
                    <p class="sosyal_p">Facebook</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-google"></i>
                    </a>
                    <p class="sosyal_p">Google</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-twitch"></i>
                    </a>
                    <p class="sosyal_p">Twitch</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-twitter"></i>
                    </a>
                    <p class="sosyal_p">Twitter</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-steam"></i>
                    </a>
                    <p class="sosyal_p">Steam</p>
                  </div>
                </div>
                <div class="ayırıcı">
                      <span class="" style="background-color: #fff;">VEYA</span>               
                </div>
                <!-- giriş yap form kısmı tab1 -->
                <div class="bolge2">             
                    <form class="form-horizontal">
                      <!--eposta kısmı--> 
                            <div class="form-group">                   
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                              <input type="email" class="form-control" id="inputEmail3" placeholder="E-posta">
                              </div>                     
                            <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">  
                              <label>
                            <input type="checkbox"> <p>Kullanıcı Adımı Hatırla</p>
                            </label>                   
                            </div>   
                            </div>
                            <a href="#">Kullanıcı Adımı Unutum</a>
                            </div>                        
                            </div>
                            </div>
                            <!--şifrekısmı--> 
                            <div class="form-group">
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                              <input type="password" class="form-control" id="inputPassword3" placeholder="Şifre">
                              <div class="input-group-addon">
                                <i id="resim" class="fa fa-eye" onclick="myFunction()"></i>
                                </div>
                              </div>                  
                            <a href="#">Şifremi Unutum</a>
                            </div>
                            </div>
                            <!--buton--> 
                            <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-success btn-lg btn-block">Giriş Yap</button>
                            </div>
                          
                            </div>                      
                      </form>
                </div>
                <a href="#"><p>Aktivasyon Kodu Gönder</p></a>
              </b-tab>
              <!--uye ol tab kısmı--> 
              <b-tab title="Üye Ol">
                <p>Sosyal medya hesaplarınızla <strong>HIZLI GİRİŞ</strong> yapabilirsiniz.</p>
                <div class="üstikonlar">
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-facebook"></i>
                    </a>
                    <p class="sosyal_p">Facebook</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-google"></i>
                    </a>
                    <p class="sosyal_p">Google</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-twitch"></i>
                    </a>
                    <p class="sosyal_p">Twitch</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-twitter"></i>
                    </a>
                    <p class="sosyal_p">Twitter</p>
                  </div>
                  <div class="ikonlar">
                    <a href="#"><i class="fa fa-steam"></i>
                    </a>
                    <p class="sosyal_p">Steam</p>
                  </div>
                </div>
                <div class="ayırıcı">
                      <span class="" style="background-color: #fff;">VEYA</span>               
                </div>
                <div class="bolge2">
                  <!--ad kısmı-->             
                  <form class="form-horizontal">
                      <div class="form-group">
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-user"></i></div>
                              <input type="text" class="form-control" id="exampleInputName1" placeholder="Adınız">
                              </div>                                            
                            </div>                   
                      </div>
                      <!--soyad kısmı--> 
                      <div class="form-group">
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-user"></i></div>
                              <input type="text" class="form-control" id="exampleInputName2" placeholder="Soyad">
                              </div>                                            
                            </div>                   
                      </div>
                      <!--eposta kısmı--> 
                      <div class="form-group">                   
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                              <input type="email" class="form-control" id="inputEmail3" placeholder="E-posta">
                              </div>                                            
                            </div>
                      </div>
                      <!--şifre kısmı--> 
                      <div class="form-group">
                            <div class="col-sm-10">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                              <input type="password" class="form-control" id="inputPassword4" placeholder="Şifre">
                              <div class="input-group-addon">
                                <i id="resim" class="fa fa-eye" onclick="myFunction2()"></i>
                                </div>
                              </div>                  
                            </div>
                      </div>
                      <!--Ülkeler seçimi-->
                      <div class="form-group input-sm">
                            <div class="col-sm-10">
                              <select v-model="selected" class="form-control">                                              
                                <option value="93">Afghanistan</option>
                                <option value="355">Albania</option>
                                <option value="213">Algeria</option>
                                <option value="1684">American Samoa</option>
                                <option value="376">Andorra</option>
                                <option value="244">Angola</option>
                                <option value="1264">Anguilla</option>
                                <option value="672">Antarctica</option>
                                <option value="1268">Antigua and Barbuda</option>
                                <option value="54">Argentina</option>
                                <option value="374">Armenia</option>
                                <option value="297">Aruba</option>
                                <option value="61">Australia</option>
                                <option value="43">Austria</option>
                                <option value="994">Azerbaijan</option>
                                <option value="242">Bahamas</option>
                                <option value="973">Bahrain</option>
                                <option value="880">Bangladesh</option>
                                <option value="1246">Barbados</option>
                                <option value="375">Belarus</option>
                                <option value="32">Belgium</option>
                                <option value="501">Belize</option>
                                <option value="229">Benin</option>
                                <option value="1441">Bermuda</option>
                                <option value="975">Bhutan</option>                                                                                                                                    
                              </select>                
                            </div>
                      </div>    
                      <!--gsm kısmı-->
                      <form class="form-inline">                                
                      <div class="form-group">
                            <div class="col-sm-3">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-globe"></i></div>
                              <div readonly=""   type="phone" class="form-control">{{ selected }}</div>
                              </div>                                            
                            </div>   
                            <div class="col-sm-8">
                              <div class="input-group">
                              <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                              <input id="gsm_number" name="gsm_number" autocomplete="off" class="form-control" placeholder="Cep Telefon Numaranız" type="phone">
                              </div>                                            
                            </div>                 
                      </div>
                      </form>
                      <!--cinsiyet seçimi-->
                      <div class="d-flex justify-content-center" data-toggle="buttons">
                          <label  class="btn btn-gender">
                            <input type="radio" name="gender" id="male" autocomplete="off" value="male" checked=""><i class="fa fa-male pr-2"></i> Erkek
                          </label>
                          <label class="btn btn-gender">
                            <input type="radio" name="gender" id="female" autocomplete="off"><i class="fa fa-female pr-2"></i> Kadın
                          </label>
                      </div>
                      <!--referans kısmı-->
                      <div class="form-group input-sm">
                            <div class="col-sm-10">
                              <select class="form-control">  
                                <option value="">Lütfen referans seçin</option>
                                <option value="1">Google</option>
                                  <option value="79">Space Soldiers</option>
                                  <option value="78">GIST</option>
                                  <option value="77">GameX</option>
                                  <option value="74">Twitch</option>
                                  <option value="20">ininal</option>
                                  <option value="21">Yemek Sepeti</option>
                                  <option value="75">Galatasaray</option>
                                  <option value="16">Dark Passage</option>
                                  <option value="7">Knight Online</option>
                                  <option value="8">Instagram</option>
                                  <option value="9">HollyHood</option>
                                  <option value="81">Göztepe</option>
                                  <option value="4">Forumlar</option>
                                  <option value="3">Arkadaş önerisi</option>
                                  <option value="2">Oyun içinden</option>
                                  <option value="80">Facebook</option>                                                                                                                                                                                                                                                            
                              </select>                
                            </div>
                            <div class="checkbox">  
                              <label>
                            <input type="checkbox"> <p><a v-b-modal.modal-tall style="font-size:12px !important">Üyelik Koşullarını Kabul Ediyorum</a></p>
                            </label>                   
                            </div>
                      </div>
                      <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-success btn-lg btn-block">Üye Ol</button>
                            </div>                      
                      </div> 
                    </form>
                </div>
                <a href="#"><p>Bayi olmak istiyorum</p></a>
              </b-tab>  
        </div>
      </b-tabs>
      <div>
        <!--kullanıcı sözleşmesi-->
        <b-modal id="modal-tall" title="Üyelik Koşulları">
            <p>
              <span style="font-size: 10pt; font-family: Ubuntu, sans-serif;">BYNOGAME® KULLANICI SÖZLEŞMESİ<br>
              <br>Bu sözleşme, sitemizdeki hizmetlerden yararlanabilmeniz için gerekli kuralları içermektedir.<br>
              <br>SİTEMİZE ÜYE OLARAK; KULLANICI SÖZLEŞMESİ’Nİ OKUDUĞUNUZU, İÇERİĞİNİ ANLADIĞINIZI VE HÜKÜMLERİNİ KABUL ETTİĞİNİZİ VE ONAYLADIĞINIZI KABUL, BEYAN VE TAAHHÜT ETMİŞ OLUYORSUNUZ.<br>
              <br>1. Taraflar<br>
              <br>İşbu sözleşme ve sözleşmeyle atıfta bulunulan ve sözleşmenin ayrılmaz birer parçası olan belgelerden ve eklerden (EK-1 Gizlilik Politikası) oluşan işbu Bynogame® Kullanıcı Sözleşmesi (bundan böyle ’Kullanıcı Sözleşmesi’ olarak anılacaktır.), Bynogame® ile Site’ye üye olan Kullanıcı arasında, Kullanıcı’nın Site’ye üye olması amacıyla ve sözleşmenin ilgili Site’nin bulunduğu elektronik ortamda Kullanıcı tarafından onaylanması anında düzenlenmiştir.<br>Kullanıcı; Site’ye üye olarak Kullanıcı Sözleşmesi’nin tamamını okuduğunu, içeriğini bütünü ile anladığını ve tüm hükümlerini onayladığını kabul, beyan ve taahhüt eder.<br><br>2. Tanımlar<br><br>Kullanıcı: Site’ye üye olan ve Site’de sunulan Hizmet’lerden, işbu sözleşmede belirtilen koşullar dahilinde yararlanan gerçek ya da tüzel kişi.<br>Site: www.bynogame.com isimli alan adından ve bu alan adına bağlı alt alan adlarından oluşan web sitesi Bynogame® tarafından, Site içerisinde ortaya konulan ürünler.<br><br>3. Sözleşmenin Konusu ve Kapsamı<br><br>Kullanıcı Sözleşmesi’nin konusu, Site’de sunulan Hizmet’lerin, bu Hizmet’lerden yararlanma şartlarının ve tarafların hak ve yükümlülüklerinin tespitidir.
              <br>Kullanıcı Sözleşmesi’nin kapsamı, işbu sözleşme ve ekleri ile Site içerisinde yer alan kullanıma, üyeliğe ve Hizmet’lere ilişkin olarak Bynogame® tarafından yapılmış olan bilcümle uyarı, yazı ve açıklama gibi beyanlardır. Kullanıcı, Kullanıcı Sözleşmesi’nin hükümlerini kabul etmekle, Site içinde yer alan kullanıma, üyeliğe ve Hizmet’lere ilişkin olarak Bynogame® tarafından açıklanan her türlü beyanı da kabul etmiş olmaktadır. Kullanıcı, bahsi geçen beyanlarda belirtilen her türlü hususa uygun olarak davranacağını kabul, beyan ve taahhüt eder.<br><br>4. Üyelik ve Hizmet Kullanımı Şartları<br><br>a) Üyelik, Site’nin ilgili bölümünden, Kullanıcı olmak isteyen kişi tarafından Site’ye üye olmak için gerekli kimlik bilgilerinin gönderilmesi suretiyle kayıt işleminin yaptırılması ve Bynogame® tarafından kayıt işleminin onaylanması ile tamamlanır. Üyelik işlemi tamamlanmadan, işbu sözleşmede tanımlanan Kullanıcı olma hak ve yetkisine sahip olunamaz.<br><br>b) Site’ye üye olabilmek için, reşit olmak ve işbu sözleşmenin 5.2 maddesi uyarınca Bynogame® tarafından, geçici olarak üyelikten uzaklaştırılmış veya üyelikten süresiz olarak yasaklanmış olmamak gerekmektedir. Reşit olmayan veya yukarıda belirtildiği gibi, işbu sözleşmenin 5.2 maddesi uyarınca, Bynogame® tarafından geçici olarak üyelikten uzaklaştırılmış veya üyelikten süresiz yasaklanmış olan kişilerin Site kayıt işlemlerini tamamlamış olmaları, Site üyesi olmaları sonucunu doğurmayacaktır.
              </span>
            </p>
        </b-modal>
      </div>
    </div>
  </template>
</b-modal>
  <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :is-full-page="fullPage"></loading>    
  </div> 
	<div id="hvrenk" class="header">
			<a href="https://www.hollyhood.com.tr/">Hollyhood</a>
			<a href="#paramkart">Param Kart</a>
			<a href="#yorumlar">Yorumlar</a>
			<a href="#kurumsal">Kurumsal</a>				
			<a href="#ik">İK</a>
	</div>
	<div class="header2">
		<a style="cursor:pointer" @click="goAnasayfa">
      <img src="../assets/bynogame-logo-siyah.png" style="width:9em"></a>	 
		<a>
			<form class="example" action="Anasayfa.html">
				<input type="text" placeholder="Search.." name="search">	
				<button type="submit">ARA</button>
			</form>
    </a>
    <a>
      <ul class="İkonS" style="list-style: none;"> 
        <a style="cursor:pointer" v-b-modal.modal-giris>
            <li><i class="fa fa-user fa-lg"></i>
            </li>
            Giriş Yap
        </a>
        <a style="cursor:pointer" @click="goSepet">
          <li><i class="fa fa-shopping-cart fa-lg"></i>
          </li>
          Sepetim
        </a>
        <a style="cursor:pointer" @click="goOdemeler">
          <li><i class="fa fa-credit-card"></i>
          </li>
          Ödeme
        </a>
      </ul>
    </a>
	</div>	 	
<div class="üstmenu">
  <div class="dusenmenu">
    <button @click="goOyunlar" class="dusenbut">Oyunlar
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">         
          <ul>
          <li >
            <a id="menu-ana" style="cursor:pointer" @click="goKO"> Knight Online</a>
              <ul id="menu-ana-2">
                <li>
                  <a href="/">Oyun Parası</a>
                  <ul id="menu-ana-3">
                    <li>
                      <a style="cursor:pointer" @click="goGold"> Goldbar</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul id="menu-ana-2" >
                  <li>
                    <a  href="">Item &amp; Skin</a>
                      <ul id="menu-ana-3">                                                                                                           <li>
                        <li>
                        <a href=""> Item, </a>
                        </li>
                        <li>
                          <a href=""> Ring</a>
                        </li>
                      </ul>
                  </li>
              </ul>
            <ul id="menu-ana-2" >
              <li>
                <a  href="">E-Pin</a>
                  <ul id="menu-ana-3">
                    <li>
                      <a href=""> KO Cash, </a>
                    </li>
                    <li>
                      <a href=""> Premium</a>
                    </li>
                </ul>
              </li>
            </ul>
          </li>
          </ul>
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>		  
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="dusenmenu">
    <button class="dusenbut">Knight Online
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">
          <h3>Category 1</h3>
          <a href="#">deneme</a>
          <a href="#">deneme</a>
          <a href="#">deneme</a>  
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="dusenmenu">
    <button class="dusenbut">İtem & Skin
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">
          <h3>Category 1</h3>
          <a href="#">deneme</a>
          <a href="#">deneme</a>
          <a href="#">deneme</a>	  
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="dusenmenu">
    <button class="dusenbut">WAX
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">
          <h3>Category 1</h3>
          <a href="#">deneme</a>
          <a href="#">deneme</a>
          <a href="#">deneme</a>		  
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="dusenmenu">
    <button class="dusenbut">Pazar
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">
          <h3>Category 1</h3>
          <a href="#">deneme</a>
          <a href="#">deneme</a>
          <a href="#">deneme</a>		  
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
  <div class="dusenmenu">
    <button class="dusenbut">Destekle
    </button>
    <div class="dusenmenu-content">
      <div class="sıra">
        <div class="sutun">
          <h6>Category 1</h6>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="sutun">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
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
                isLoading: false,
                fullPage: true,
                selected: "93"
            }
        },
        components: {
            Loading
        },
        methods: {
            goOdemeler() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Ödemeler');
                },1000)
            },
            goOyunlar(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Oyunlar');
                },1000)
            },
            goSepet(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Sepetim');
                },1000)
            },
            goAnasayfa(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/');
                },1000)
            },
            goKO(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Oyunlar/knight-online');
                },1000)
            },
            goGold(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Oyunlar/knight-online/gold-bar');
                },1000)
            },         
        }
    }
</script>
<style scoped>
.header {
	display: flex;
	justify-content: center;
	width: 100%;
	padding: .75em .75em .1em;	
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	background-color:white;
}
.header a{
	margin-left:20px;
	float:left;	
}
.header2 {
	position: relative;
	max-width: 1500px;
	width: 100%;
	margin: 0 auto .75em;
	display: flex;
	background-color:white;
}
.header2 a{
	margin-left:40px;
	float:left;
	
}
* {
  box-sizing: border-box;
}
/* ikonların stili*/
.İkonS{	 
	color: #435064;
	text-align:center;	
  font-size: 18px;
  margin-left: 5px;
}
 .İkonS a:link,a:visited{
	color:#435064;
	text-decoration:none;
	
}
 .İkonS a:hover{
  color:red;
  transition: color .2s;
}
/* Arama çubuğu üstü linkler */
 #hvrenk{	
	color: #435064;
	text-align:center;
	font-size:14px;
	
}
 #hvrenk a:link,a:visited{
	color:#435064;
	text-decoration:none;
	
}
 #hvrenk a:hover{
  color:red;
  transition: color .2s;
}

/* Arama Çubuğu stili */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  margin-left: 100px;
  width: 520px;
  background: white;
  height: 2.5em;
}

/* ARA butonu stili */
form.example button { 
  width: center;
  margin-left:0px;
  padding: 9px;
  background: #e9ecef;
  color: #495057;
  font-size: 17px;
  border: 1px solid #ced4da;
  border-left: none; /* çift border olmaması için*/
  cursor: pointer;
  
}

form.example input:hover {
  border: 1px solid red;
  transition: color .2s;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}

  /* Navbar container */
.üstmenu {
  overflow: hidden;
  background-color:white;
  font-family: Arial;
  float:left;
  width:100%;
  border-bottom: 1px solid #435064;
  border-top:1px solid #435064;
}

/* navbar içi linkler */
.üstmenu a {
  float: left;
  font-size: 12px;
  color: white;
  text-align: center;
  padding: 0px 0px;
  text-decoration: none;
}

/* dropdown container */
.düsenmenu {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dusenmenu .dusenbut {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin:0; /* Important for vertical align on mobile phones */
  width:150px;
  margin-left:63px;
 float:left;
}

/* mause gelince arka plan değişikliği */
.üstmenu a:hover, .dusenmenu:hover .dusenbut {
  background-color: white;
  color:#ed502f;
  transition: color .2s;
}

/* Dropdown content (hidden by default) */
.dusenmenu-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 89%;
  margin-left:70px;
  left: 0;
  z-index: 1;
}

/* dropdown menu  hover */
.dusenmenu:hover .dusenmenu-content {
  margin-top:50px;
  display: block;
  z-index:15;
}

/* 3 tane eşit sütün için */
.sutun {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: white;
  height: auto;
  
}

/* Sütun içi stil */
.sutun a {
  float: left;
  color: black;
  padding: 2px;
  text-decoration: none !important;
  text-align: left;
}

/* Clear floats after the columns */
.sıra:after {
  content: "";
  display: table;
  clear: both;
} 

#menu-ana{
 font-size: 15px;
 font-weight: 700;
 margin-bottom: .5em;
 color: #ed502f ;
}

#menu-ana-2{
  display: inline;
  padding-right: 0;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  color: #435064 ; 
}
#menu-ana-3{
display: inline;
padding-right: 0;
font-size: 13px;
font-weight: 500;
position: relative;
margin-right: .4em;
color: #435064 ;
}

ul{
  display: inline;
  list-style: none;
}
/*bolge 1 formun dış katmanı*/
.bolge1 {
  justify-content: center;
  background-color: white;
}
.bolge1 p{
  text-align: center;
  font-size: 13px;
}
.bolge1 a{
  color: #435064 !important;
}
.bolge1 a:hover{
  color:#ed502f !important;
  text-decoration: none !important;
  transition: 0.2s;
}

/*bolge2 formu çevreleyen kısım*/
.bolge2 {
  background-color: white;
}
.bolge2 a{
  font-size: 10px;
  float:right !important;
  color: #435064 !important;
}
/*mouse üstüne gelince renk geçişi */
.bolge2 a:hover{
  color:#ed502f !important;
  text-decoration: none !important;
  transition: 0.2s;
}
.bolge2 p{
  font-size: 0.8em;
  float:right;
  margin-left:3px;
}
/*forumların yanındaki ikonların özellikleri*/
.input-group-addon{
  background-color: #f8f9fa;
  width:30px;
  padding: 2%;
  border-style: solid;
  border-width: 1px;
  border-color: #f8f9fa;
}
/*hızlı giriş simgleri*/
.üstikonlar{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
.ikonlar{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-left: .5em;
  margin-right: .5em;
}
.sosyal_p{
  font-size: 13px;
text-align: center;
}
.sosyal_p:hover{
  color:#ed502f;  
}
/*Ayırma texti*/
.ayırıcı{
  position: relative;
text-align: center;
margin-top: 15px;
margin-bottom: 15px;
}
.ayırıcı span{
  padding: 7px;
font-size: 12px;
position: relative;
z-index: 2;
}
.ayırıcı::after{
content: "";
position: absolute;
width: 100%;
border-bottom: 1px solid #ddd;
top: 55%;
left: 0;
z-index: 1;
}
</style>