import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import store from './store'
import './registerServiceWorker'
import '@/assets/styles/main.scss'
import '@/assets/styles/transition.scss'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  router,
  // store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
