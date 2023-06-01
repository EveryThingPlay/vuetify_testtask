import Vue from 'vue'
import Vuex from 'vuex'
import store from './stores/store'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
