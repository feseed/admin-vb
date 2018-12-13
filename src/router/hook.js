import router from './index'
import { loadLanguageAsync } from '@/plugins/i18n'
import { storage } from '@gauseen/tools'

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
	loadLanguageAsync(lang).then(() => next())
})
