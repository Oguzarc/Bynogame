import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'


Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

/*lazyLoad için */
const Girisyap = () => import('./Girisyap.vue')
const Ödemeler = () => import('./Ödemeler.vue')
const Anasayfa = () => import('./Anasayfa.vue')
const Oyunlar = () => import('./Oyunlar.vue')
const KO = () => import('./KnightOnline.vue')
const Gold = () => import('./GoldBar.vue')
const item = () => import('./ilkitem.vue')
const ikinciitem = () => import('./ikinciitem.vue')
const sepet = () => import('./Sepetim.vue')
const SSS = () => import('./SSS.vue')
const Gizlilik = () => import('./Gizlilik.vue')

const routes = [
    {path:'/Giris', component:Girisyap},
    {path:'/', component:Anasayfa},
    {path:'/Ödemeler', component:Ödemeler},
    {path:'/Oyunlar', component:Oyunlar},
    {path:'/Oyunlar/knight-online', component:KO},
    {path:'/Oyunlar/knight-online/gold-bar', component:Gold},
    {path:'/altar', component:item},
    {path:'/sirius', component:ikinciitem},
    {path:'/Sepetim', component:sepet},
    {path:'/iletisim/SSS', component:SSS},
    {path:'/Gizlilik', component:Gizlilik},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
