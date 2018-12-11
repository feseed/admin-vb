const path = require('path')

module.exports = {
	resolve (dir) {
		return path.join(__dirname, dir)
	},
	proxyTable: {
		'/mdm2': {
			target: process.env.VUE_APP_DOMAIN || 'http://preview-hgpos.behuntergatherer.com', // uat 上海测试
			changeOrigin: true,
			pathRewrite: {
				'^/mdm2': '/mdm2',
			},
		},
	},
	stylusOptions: {
		import: [
			path.join(__dirname, './src/styles/common/variables.styl'), // 一次性引入全局样式
		],
		paths: [
			path.join(__dirname, './src/styles/common/'),
			path.join(__dirname, './'),
		],
	},
}
