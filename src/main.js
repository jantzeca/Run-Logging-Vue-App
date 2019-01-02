import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Homepage from './components/Homepage.vue'
import AddUser from './components/AddUser.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Homepage},
    {path: '/addUser', component: AddUser}
  ]
})

new Vue({
  router,
  components: {
    App
  },
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
