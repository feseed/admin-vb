import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { storage } from '@gauseen/tools'
import langCN from '@/locales/cn'

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'cn',
	fallbackLocale: 'cn',
	messages: {
		cn: langCN,
	},
})

const loadedLanguages = ['cn']

function setI18nLanguage (lang, to) {
	i18n.locale = lang
	storage().set('admin_language', lang)
	document.querySelector('html').setAttribute('lang', lang)
	return lang
}

// 切换、加载语言
export function loadLanguageAsync (lang, to) {
	if (i18n.locale !== lang) {
		if (!loadedLanguages.includes(lang)) {
			return import(`@/locales/${lang}`).then(msgs => {
				i18n.setLocaleMessage(lang, msgs.default)
				loadedLanguages.push(lang)
				return setI18nLanguage(lang, to)
			})
		}
		return Promise.resolve(setI18nLanguage(lang, to))
	}
	return Promise.resolve(lang)
}

export default i18n
