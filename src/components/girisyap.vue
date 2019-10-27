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
                        <input type="checkbox"> <p><a style="font-size:12px !important">Üyelik Koşullarını Kabul Ediyorum</a></p>
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
</div>
</template>

<script>
export default {
    data() {
      return {
        selected: "93"
      }
    }
  }
</script>


<style scoped>
/*bolge 1 formun dış katmanı*/
.bolge1 {
  width:50%;
  justify-content: center;
  margin-left: 25%;
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
  width:75%;
  margin-left: 15%;
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
