<template>  
<div class="boyut">
  <div class="vld-parent">
      <loading :active.sync="isLoading" 
      :is-full-page="fullPage"></loading>    
  </div>
  <div class="anabaslık">
        <h3>ITEM VE SKIN</h3>
  </div>
  <!--önizleme resimler-->
  <b-tooltip target="tooltip-target-1" triggers="hover">  
        <img style="width:170px" src="https://cdn.bynogame.com/koitem/ilanresima4506329e16f8cdd1ca816e462c8d05f.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-2" triggers="hover">  
        <img style="width:170px" src="https://cdn.bynogame.com/ko-item-foto/eagles-eye-8-normal.png">
  </b-tooltip>
  <b-tooltip target="tooltip-target-3" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-4" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-5" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-6" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-7" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <b-tooltip target="tooltip-target-8" triggers="hover">  
        <img style="width:200px" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg">
  </b-tooltip>
  <!--item cartları-->
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Knight Online Item" active><b-card-text>
           <div>
    <b-card-group deck>
    <a style="cursor:pointer" @click="goAltar"> <b-card 
    footer="3200 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-1" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresima4506329e16f8cdd1ca816e462c8d05f.jpg"> 
  </b-img-lazy>
  <b-card-title>Altar</b-card-title>
    <b-card-text>Iron Row Reb +11</b-card-text>
  </b-card></a>

    <a style="cursor:pointer" @click="goSirius"><b-card 
    footer="1175 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-2" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresima4506329e16f8cdd1ca816e462c8d05f.jpg"> 
  </b-img-lazy>
  <b-card-title>Sirius</b-card-title>
    <b-card-text>+8 Eagle's Eye</b-card-text>
  </b-card>  </a> 

  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-3" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>    
  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-4" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>    
  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-5" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card 
      footer="250 TL"
      footer-tag="footer"
      footer-bg-variant="success"
      footer-border-variant="dark"
      style="max-width: 10rem;"
      align="center"
    ><b-img-lazy id="tooltip-target-6" 
    v-bind="mainProps"  src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
    </b-img-lazy>
    <b-card-title>VEGA</b-card-title>
      <b-card-text>+2 JUDICIOUS BELT</b-card-text>
    </b-card>    
    <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
    ><b-img-lazy id="tooltip-target-7" 
    v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
    </b-img-lazy>
    <b-card-title>VEGA</b-card-title>
      <b-card-text>+2 JUDICIOUS BELT</b-card-text>
    </b-card>    
  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-8" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>    
  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-3" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>    
  <b-card 
    footer="250 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    style="max-width: 10rem;"
    align="center"
  ><b-img-lazy id="tooltip-target-3" 
  v-bind="mainProps" src="https://cdn.bynogame.com/koitem/ilanresimed9fa2d17ca5c1378e7f5c46c35dfc79.jpg"> 
  </b-img-lazy>
  <b-card-title>VEGA</b-card-title>
    <b-card-text>+2 JUDICIOUS BELT</b-card-text>
  </b-card>
  
    </b-card-group>
  </div>
          </b-card-text></b-tab>
      <b-tab title="Knight Online Ring"><b-card-text>
    <div>
        <b-card-group deck>
 <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

        </b-card-group>

    <b-card-group deck>
 <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

  <b-card img-src="https://images.bynogame.com/images/ko-news/cypherring.jpg"
    footer="800 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Vega"
    style="max-width: 20rem;"
    align="center"
  >
    <b-card-text>83 LWL REB 4 HUMAN MAGE 450 K </b-card-text>
  </b-card>

        </b-card-group>

    </div>
        
        </b-card-text></b-tab>



      <b-tab title="CSGO"><b-card-text>
     <div>
        <b-card-group deck>
<b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEprP5gVO8v11lZj-gIYbDclRqMA7Zq1S7lOm-0Za6753KmHoxvnQh5y7ZyhWxiRwecKUx0iL1oy6z"
    footer="1500 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="M9 Bayonet | Doppler (Factory New)"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygED6-kU_Y2HyLYaXeldoZFHYqFa5w-btg8W-7s7PzndkuyJz5CvYzkO0hgYMMLK4xIyRWw"
    footer="1900 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Karambit | Doppler (Factory New)"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

<b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz"
    footer="55 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="AK-47 | Redline (Field-Tested)"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

<b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz"
    footer="58.9 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="AK-47 | Redline (Well-Worn)"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

   <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOym5Cbm_LmDKvZl3hUu_p9g-7J4cL23g3sr0Y4ZTihdteccwJqaViE-Fi8lby9hpbq6c_KzHMyvSYqs3zegVXp1mfvJpRH"
    footer="930 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Flip Knife | Doppler (Factory New)"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>


        </b-card-group>

        <b-card-group deck>

        <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI"
    footer="220 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="StatTrak™ AK-47 | Neon Revolution (Field-Tested)"
    style="max-width: 20rem;"
    align="center"
        >
         </b-card>

        <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q"
    footer="750 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="StatTrak™ AK-47 | Bloodsport (Factory New)"
    style="max-width: 20rem;"
    align="center"
        >
         </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh6fF8Yqmiw3l_BdrZ2vzIo-QdQBsaA2B-lC3yb_v0JW_uc_JmHQ16yYh-z-DyKLv5rKC"
    footer="1050TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="M9 Bayonet | Crimson Web (Field-Tested)"
    style="max-width: 20rem;"
    align="center"
        >
         </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW0924l4WYg-X1P4Tdn2xZ_ItyiO2Yot-n3gztrUduMW6icdWcc1RqM1HR_FfswLu6gZe4tZrNmiBkpGB8smM7Zio1"
    footer="60 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="M4A4 | 龍王 (Dragon King) (Minimal Wear)"
    style="max-width: 20rem;"
    align="center"
        >
         </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOh-zF_Jn4xgDsqhJsYWv0dteddlc3Z12BrwPtxO3mjJO1uMidnSEx6HQktnfdlxSpwUYb7eGENok"
    footer="775TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title=" Butterfly Knife | Urban Masked (Field-Tested)"
    style="max-width: 20rem;"
    align="center"
        >
         </b-card>



        </b-card-group>
    </div>
    </b-card-text></b-tab>




      <b-tab title="VGO"><b-card-text>
    <div>
        <b-card-group deck>

            <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>


        </b-card-group>


 <b-card-group deck>

            <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>

  <b-card img-src="https://cdn.bynogame.com/skin-static/wax-key-300.png"
    footer="15.79 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="WAX Key"
    style="max-width: 20rem;"
    align="center"
  >
  </b-card>


        </b-card-group>


    </div>
          
          </b-card-text></b-tab>



      <b-tab title="H1Z1"><b-card-text>
          <div>
        <b-card-group deck>

        <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>


 <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        

        </b-card-group>


 <b-card-group deck>

        <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>


 <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

         <b-card img-src="https://cdn.bynogame.com/skin-static/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ-DAS_wX5ZIoiWV-K38TLwy8b8rpHw"
    footer="2.82 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Green Dawn AR-15"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        

        </b-card-group>


    </div>

          </b-card-text></b-tab>





      <b-tab title="DOTA 2"><b-card-text>
          <div>
        <b-card-group deck>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        </b-card-group>


         <b-card-group deck>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        <b-card img-src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU7pw1SR0nCCOms0NrAbFxkIBwYu7uiPhRf0uPNaW8MvY3mw9XdkqKhMuKJwz9XsJRz2OqZ942h3wW2-hZpajvzdYGXdVQ-Y0aQpAY-TTVR6g"
    footer="16.38 TL"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Inscribed Magus Apes"
    style="max-width: 20rem;"
    align="center"
        >
        </b-card>

        </b-card-group>
    </div>
          
          </b-card-text></b-tab>




    </b-tabs>
  </b-card>
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
                fullPage: true,
                 mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',   
        }
          }
        },
        components: {
            Loading
        },
        methods: {          
            goAltar(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/altar');
                },1000)
            },
             goSirius(){
              this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                  this.$router.push('/sirius');
                },1000)
            },         
        }
    }
</script>

<style scoped>
.anabaslık{
	display: flex;
	justify-content: center;
	width: 100%;
	padding: .75em .75em .1em;	
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	background-color:white;
  color:#ed502f;
}
.boyut{
  margin-right: auto;
  margin-left: auto;
  width: 85%;
  margin-top:40px;
}
a{
  color:#343a40;
  text-decoration: none !important;
}
a:hover{
   color:red;
  transition: color .2s;
}
</style>