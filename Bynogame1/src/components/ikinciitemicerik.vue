<template>
    <div style="margin-top:80px">
        <b-container fluid>
            <b-row>
                <!--resim kısım1-->             
                <b-col >
                <div class="bolge2">                  
                    <img src="https://cdn.bynogame.com/koitem/ilanresimcf2771c8481cbce3670a1c53b1973f23.jpg" >
                </div>
                </b-col>
                <!--satın alma kısmı-->
                <b-col >
                    <div class="col-xl-8 col-lg-6 col-md-12 col-sm-12 item-detail-right-side" style="background-color: #fff;height: 35em; padding: 0">
                    <div class="row mt-3 mb-3 mr-0 ml-0">
                        <div class="col  d-flex justify-content-center pl-0 pr-0">
                             <span  style="margin-left: 1em; font-size: 0.9em">Satıcı: <a ><span style="color: #ed502f;font-size: 1.2em"> WebDersiMukemmel <span style="color: #33b339;">(10 Başarılı)</span> </span></a> </span>
                                <span style="margin-left: auto; font-size: 0.9em">Tarih: <span style="color: #ed502f;font-size: 0.9em"> Bugün</span> </span>
                        </div>
                    </div>
                    <h6 class=" ml-3 mt-3" style="color: #ed502f">#3232127
                        - Eagles Eye + 8 </h6>
                    <div class="row justify-content-center" style="height: 66%; margin: 0;">
                        <div class="col-12 mt-2 item-detail-info">
                            <div class="p-2" style="background-color: white; height: 4em; border-bottom: 1px solid #ebebeb;">
                                <div  style="display: flex; flex-direction: column">
                                <span  style="font-weight: bold; font-size: 1em; line-height: 1.5em">Bow/Rogue:</span>
                                    <span ></span>
                                </div>
                            </div>
                        </div>
                        <!--saat kısmı ve server ad-->
                        <div class="col-12 mt-2 ">
                            <div class="p-2" style="background-color: white; height: 4em;
                          border-bottom: 1px solid #ebebeb;">
                                <div  style="display: flex; flex-direction: column">
                                <span  style="font-weight: bold; font-size: 1em; line-height: 1.5em">Server:</span>

                                    <span >Sirius</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-2 ">
                            <div class="p-2" style="background-color: white; height: 9em;
                         overflow: auto;">
                                <div  style="display: flex; flex-direction: column">
                                <span  style="font-weight: bold; font-size: 1em; line-height: 1.5em">Açıklama:</span>

                                    <small class="mb-2" style="font-size: 0.75em; color: #ed502f; position: absolute;
                                 right: 1.4em;">Teslimat Saatleri:
                                        23:50 - 14:50 </small>
                                    <div class="d-flex flex-column" style="width: 100%;">
                                        <div  style="font-size: 0.75em; text-align: initial">İtem Çok iyidir. Mutlaka Al kardeşim. Al Git.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--satın al butonu ve fiyat-->
                    <div class="row flex-column" style="margin: 0; background-color: #ebebeb; height: 21%;">
                        <div class="col d-flex flex-column">
                            <div class="row ilan-buttons" style="margin: 0;">
                                <div class=" pl-0 pr-0 d-flex align-items-center">
                                    <span class=" ml-3" style="font-size: 2em">1175 TL</span>                                   
                                </div>
                                <div class="col d-flex justify-content-around ">
                                    <div style="width: 100%">
                                        <form >
                                            <button  class="btn game-item-list-purchase-buttons btn-success item-comment-btn"   type="submit" style="width: 100%;">
                                                Satın Al
                                                <span>
                                        <i class="fa fa-shopping-cart ml-1" style="color: #fff !important;" ></i>
                                    </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </b-col>
            </b-row>  
        </b-container>
        <!--modal buton-->
            <div style="margin-left:40%">
                <button v-b-modal.modal-1 class="btn btn-secondary w-25" type="button">
                    Soru Sor/Cevapla
                    <span>
                         <i class="fa fa-comment ml-1" style="color: #fff !important;" id="commentBtn"></i>
                    </span>
                </button>
            </div>
        <!--tab menu-->
        <div class="cont">
           <b-tabs  pills>
                <div class="cont">
                    <!--urun yorum-->
                    <b-tab title="Sorular/Cevaplar" active >
                        <div class="create-post">
                            <label for="create-post">Yorum yapabilirsiniz.</label>
                            <input type="text" id="create-post" v-model="text" placeholder="Yorum...">
                            <button v-on:click="createPost">Gönder!</button>
                        </div>
                        <p class="error" v-if="error">{{error}}</p>
                        <p v-if="posts.length === 0">
                            Henüz yorum yok.
                        </p>
                        <div class="post"
                            v-for="(post, index) in posts"
                            v-bind:item="posts"
                            v-bind:index="index"
                            v-bind:key="post._id"
                            v-on:dblclick="deletePost1(post._id)"
                            >
                            {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}/
                            <div v-if="posts.length > 0" class="text">{{post.text}}</div>
                        </div>
                    </b-tab>
                    <!--Ürün Açıklaması--> 
                    <b-tab title="Ürün Açıklaması">
                        <div  style="font-size: 0.8em">
                                <img src="https://images.bynogame.com/images/yan%20dol.jpeg" class="img-fluid">
                                <br> <br>
                                <p>
                                    Satın AL Tuşuna bastığınız an aksiyon başlar </p>

                                <p> 1) İtem ilanı veren kişiye otomatik olarak sms ve mail gider.</p>
                                <p> 2) Satıcı sisteme ve oyuna giriş yapar, itemi bize teslim eder. Bizde sizin
                                    verdiğiniz nicke oyun içinden itemi teslim ediyoruz.</p>
                                <p> 3) Alıcı (Siz), İtem elinize geçince ’’EVET - ONAYLIYORUM’’ tuşuna
                                    basarsınız,
                                    satıcıya parası aktarılır ve işlem tamamlanır . Bu kadar basit.</p>

                                <p> +Teslimatın bütün aşamalarında Operatörümüz tek ekranda ALICI ve SATICI ile
                                    aynı
                                    anda yazışarak görüşür, aracılık yapar, karışıklıklar oluşmadan önlenir.</p>

                                <p> +Sizin karakter adınıza benzer isim de char görürseniz lütfen canlı destek
                                    hattından bizi uyarınız. İtem alış-verişlerinde mutlaka ksc ( Ekran
                                    görüntüsü
                                    )alınız.</p>


                            </div>    
                    </b-tab>  
                </div>
            </b-tabs>           
        </div>
        <!--alt bilgilendirme formu-->
        <div class="cont">
            <div class="item-detail-sabit" style="line-height: 1; border: 1px solid #ebebeb; padding: 1em;font-size: 0.8em">
                    <hr>
                    <p style="text-align: center;">
                        <strong>ByNoGame</strong> alıcı ve satıcı arasında 
                        <strong>mükemmel </strong>bir köprü kurar.
                    </p>
                    <center>%100 Güvenli Aracı ( %100 Secure Middleman&nbsp; )
                    </center>
                    <center></center>
                            <center>
                                <strong>Çöpten alınması için bırakılan itemler ücretlendirme kapsamına girmezler, eğer itemli char satıyorsanız öncelikle 
                                    &nbsp;bu itemleri bize teslim edersiniz daha sonra karakteri ring haline getirip ikinci bir işlemle ringi teslim edersiniz. 
                                    Çöpte item olduğu iddiaa edilen ilanlar onaylansa bile içerisinden item çıkmama durumunda firmamız sorumlu değildir.
                                </strong>
                            </center>
                                    <center></center>
                            <center>
                                <p>
                                    <img src="https://images.bynogame.com/images/anlatim/Bynogame-Infographic-4.jpg" alt="" width="887" height="533"><br><br><strong>+</strong> Teslimatın 
                                    <span style="text-decoration: underline;">bütün aşamalarında</span> Operatörümüz ikiye bölünük bir ekranda <span style="color: #339933;"><strong>ALICI</strong></span> ve 
                                    <span style="color: #cc0033;">
                                    <strong>SATICI</strong>
                                    </span> ile aynı anda yazışır görüşür, karışıklıklar oluşmadan önlenir.
                                </p>
                            </center>
            </div>
        </div>
        <b-container>
            <!--yazı ve spin butonları-->
            <b-list-group horizontal>      
            <div style="margin-left:30%">     
                <b-spinner variant="danger" type="grow" label="Loading..."></b-spinner>
            </div>
            <div class="ml-2" style="font-size: 1.25em;">Canlı KO Skin Akışı
            </div>
            <div>
                <b-button v-b-toggle.collapse-3 class="m-1">Gizle/Göster</b-button>
            </div>
            </b-list-group>
            <b-collapse visible id="collapse-3">
                <b-card-group>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--kart item-->
                    <div class="d-flex" style="cursor: pointer;">
                        <div class="card ko-item flex-fill" style="width: 9.5rem;">
                            <div class="image-wrapper_item" style="height: 10em; overflow: hidden; background-color: black;">
                                <img class="card-img-top" src="https://cdn.bynogame.com/ko-item-foto/chitin-armor-pauldron-11-rebirth.png" style="width: 9.4rem; height: 100%; object-fit: scale-down" alt="+9 Warrior Chitin Set Rev 11">
                            </div>
                            <div class="card-body ko-body">
                                <p class="card-title ko-title" style="font-size: 0.9em;">Sirius</p>
                                    <small style="position: absolute; top: 13em;right: 0.5em;">00:03</small>
                                    <p class="card-text mb-2" style="font-size:0.63em; text-align: initial;">
                                        +9 Warrior Chitin Se
                                    </p>
                                <div class="ko-item-price d-flex flex-nowrap justify-content-center">
                                    <p class="text-center">8500 TL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card-group>
            </b-collapse>
        </b-container>
        <!--modal buton--içi-->
        <b-modal id="modal-1" title="Soru Sor/Cevapla">
            <div class=""><strong style="color: #ed502f">#3232996</strong>
              kodlu ilanla ilgili soru sor / cevapla.
            </div>
            <div class="form-group input-sm">
                        <div class="col-sm-10" style="margin-top=10%">
                          <select  class="form-control">                                              
                            <option >Şablon Seç</option>
                            <option >Fiyatı.. tl yaparsanız almak istiyorum</option>
                            <option >otp Devri yapabilirmiyiz</option>
                            <option >Şablon Seç</option>
                            <option >Fiyatı.. tl yaparsanız almak istiyorum</option>
                            <option >otp Devri yapabilirmiyiz</option> 
                            <option >Şablon Seç</option>
                            <option >Fiyatı.. tl yaparsanız almak istiyorum</option>
                            <option >otp Devri yapabilirmiyiz</option>                                                                                                                                     
                          </select>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" name="smsgonder" class="form-check-input" id="smsgonder" style="margin-top: 0;">
                            <label class="form-check-label" for="exampleCheck1">Satıcıyı/Alıcıyı Sms ile bilgilendir
                                <small class="color-red">(0.1 TL ücret kesilir)</small>
                            </label>
                        </div>               
            </div> 
        </b-modal>
    </div>
</template>
<script >
import yorum2 from '../yorum2';

export default {
  name: 'İlkitemicerik',
  data() {
    return {
      posts:[],
      error:'',
      text: ''
    }
  },
  async created() {
    try{
      this.posts = await yorum2.getPosts(); 
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createPost(){
      await yorum2.insertPost(this.text);
      this.posts = await yorum2.getPosts();
    },
    async deletePost1(id){
      await yorum2.deletePost(id);
      this.posts = await yorum2.getPosts();
    }
  },
}
</script>
<style scoped>
.cont{
  width:80%;
  margin-left: 10%;
}
.bolge2{
    margin-top: 20px;
    margin-left: 30%;
}

.bolge2 img{
    height: 80%;
    width: 80%;
}
.post { 
  position: relative; 
  border: 1px solid red; 
  background-color: gray; 
  padding: 10px 10px 30px 10px; 
  margin-bottom: 15px; 
  }
.created-at { 
  position: absolute; 
  top: 0; left: 0; 
  padding: 5px 15px 5px 15px; 
  background-color: blue; 
  }
.error { 
  border: 1px solid #ff5b5f; 
  background-color: #ffc5c1;
  padding: 10px; 
  margin-bottom: 15px; 
  }
</style>