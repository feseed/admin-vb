import router from './index'
import { loadLanguageAsync } from '@/plugins/i18n'
import { storage } from '@/utils'

// 本地存储当前语言
const getCurrentLang = () => {
	let language = storage().get('pos_language')
	if (!language) {
		language = 'cn'
		storage().set('pos_language', language)
	}
	return language
}

router.beforeEach(async (to, from, next) => {
	let lang = getCurrentLang()
	loadLanguageAsync(lang).then(() => next())
})
