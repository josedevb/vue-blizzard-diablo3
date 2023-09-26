import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './plugins/BootstrapVue'
import './plugins/fontAwesome'

import './assets/css/main.styl'

import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.init()
  },
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  }
}).$mount('#app')
