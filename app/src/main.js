import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'
import Pagination from './components/Pagination/index.vue'
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false
// import {reqOnetalk} from '@/api'
// reqOnetalk().then(res=>{
//   console.log(res)
// })
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
