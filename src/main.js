import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import vueBeauty from 'vue-beauty'

import '@/router/hook'

// global css
import './styles/common/minireset.css'
import 'vue-beauty/package/style/vue-beauty.min.css'

Vue.use(vueBeauty)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app')
