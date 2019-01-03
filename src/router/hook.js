import router from './index'
import store from '@/store'
import { loadLanguageAsync } from '@/plugins/i18n'
import { storage } from '@gauseen/tools'

import {
	ADD_DYNAMIC_ROUTES,
} from '@/store/mutation-types'

import { fetchRoutes } from '@/api/permission'

// 本地存储当前语言
const getCurrentLang = () => {
	let language = storage().get('admin_language')
	if (!language) {
		language = 'cn'
		storage().set('admin_language', language)
	}
	return language
}

router.beforeEach(async (to, from, next) => {
	let lang = getCurrentLang()
	await loadLanguageAsync(lang)
	const dynamicRoutesByStore = store.state.dynamicRoutes
	// 没有动态路由时，重新请求加载路由
	if (!dynamicRoutesByStore.length) {
		let dynamicRoutes = await fetchRoutes()
		store.commit(ADD_DYNAMIC_ROUTES, dynamicRoutes)
		// console.log('store.state.dynamicRoutes: ', store.state.dynamicRoutes)
		router.addRoutes(store.state.dynamicRoutes)
		next({ path: to.path, replace: true })
	} else {
		next()
	}
})
