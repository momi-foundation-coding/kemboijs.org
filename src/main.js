import Vue from 'vue'
import App from './App.vue'
import Prism from 'prismjs'
require('../node_modules/prismjs/themes/prism.css')
// require('../node_modules/prismjs/themes/prism-okaidia.css')

Vue.config.productionTip = false

Vue.filter('highlight', (code, lang = 'javascript') => {
  return Prism.highlight(code, Prism.languages[lang], lang)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
