<template>
<div>
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
        <a style="cursor:pointer" @click="goGiris">
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
            <a id="menu-ana" href="/Oyunlar/knight-online"> Knight Online</a>
              <ul id="menu-ana-2">
                <li>
                  <a href="/">Oyun Parası</a>
                  <ul id="menu-ana-3">
                    <li>
                      <a href="/Oyunlar/knight-online/gold-bar"> Goldbar</a>
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
                fullPage: true
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
            goGiris(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/Giris');
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

</style>