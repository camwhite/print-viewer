import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import * as io from 'socket.io-client'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueSocketio, io.connect('', {transports: ['websocket', 'polling']}))

new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
