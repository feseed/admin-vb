import axios from 'axios'
import { notification } from 'mint-ui'
import { storage } from '@gauseen/tools'

const api = process.env.VUE_APP_BASE_API

export const get = (url, data, options) => {
	return common('GET', url, data, options)
}

export const post = (url, data, options) => {
	return common('POST', url, data, options)
}

export const common = (type, url, data, options = {}) => {
	const lang = storage().get('admin_language') === 'en' ? 'en' : 'zh-CN'
	const config = {
		method: type,
		url: `${api}${url}`,
		data: data,
		dataType: 'json',
		timeout: options.timeout,
		headers: {
			'accept-language': lang,
			'content-type': 'application/json;charset=utf-8',
		},
	}
	if (!options.noLoading) {
		// 添加loading
		// Indicator.open({ spinnerType: 'fading-circle' })
	}
	return axios(config).then((res) => {
		if (res.success) {
			return res.data
		} else {
			return Promise.reject(res.errorMessage)
		}
	})
}

axios.interceptors.request.use(function (config) {
	return config
}, function (error) {
	return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
	// 关闭loading
	// Indicator.close()
	return response.data || {}
}, function (error) {
	// 关闭 loading
	// Indicator.close()
	if (error.message) {
		let config = {
			message: '提示',
			description: error.message,
			duration: 3,
		}
		notification.warning(config)
	}

	// 请求状态 401 时跳转 login 页
	// if (error.response.status === 401) {}
	return Promise.reject(error)
})

const install = function (Vue) {
	Vue.prototype.$get = get
	Vue.prototype.$post = post
}

export default install
