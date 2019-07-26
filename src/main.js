import Vue from 'vue'
import Prism from 'prismjs'
import VueRouter from 'vue-router'
require('../node_modules/prismjs/themes/prism.css')
// require('../node_modules/prismjs/themes/prism-okaidia.css')

// Import Pages
import Framework from './pages/Framework.vue'
import HomePage from './pages/HomePage.vue'

Vue.config.productionTip = false

Vue.filter('highlight', (code, lang = 'javascript') => {
  return Prism.highlight(code, Prism.languages[lang], lang)
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/get-started', component: Framework }
  ]
})

new Vue({
  router,
  render: h => h(Framework)
}).$mount('#app')
