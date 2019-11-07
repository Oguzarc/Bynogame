import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Anasayfa from './Anasayfa.vue'
import Girisyap from './Girisyap.vue'
import Ödemeler from './Ödemeler.vue'
import Oyunlar from './Oyunlar.vue'
import KO from './KnightOnline.vue'
import Gold from './GoldBar.vue'
import item from './ilkitem.vue'
import ikinciitem from './ikinciitem.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const routes = [
    {path:'/Giris', component:Girisyap},
    {path:'/', component:Anasayfa},
    {path:'/Ödemeler', component:Ödemeler},
    {path:'/Oyunlar', component:Oyunlar},
    {path:'/Oyunlar/knight-online', component:KO},
    {path:'/Oyunlar/knight-online/gold-bar', component:Gold},
    {path:'/altar', component:item},
    {path:'/sirius', component:ikinciitem},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
