import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 后端返回的路由规则示例：
 *
 * {
 *	path: '/someParent',            // 父级路径以 / 开头
 *	name: 'nav-2',                  // 父级路由名称
 *	hidden: true,                   // 父级路由不在侧边导航栏显示
 *	meta: {
 *		title: 'nav-2',               // 父级路由 title，用于面包屑，侧边导航栏显示
 *		icon: 'paper-clip',           // 父级路由侧边导航栏 icon 图标
 *	},
 *	children: [
 *		{
 *			path: 'aa',                 // 子级路径不要以 / 开头
 *			name: 'bb',                 // 子级路由名称
 *			hidden: true,               // 子级路由不在侧边导航栏显示
 *			meta: {
 *				title: '2-1',             // 子级路由 title，用于面包屑，侧边导航栏显示
 *				icon: 'link',             // 子级路由侧边导航栏 icon 图标
 *			},
 *			componentPath: 'Testing',   // 子级路由对应的页面地址 (此地址表示: `@/pages/Testing.vue`)
 *		},
 *	],
 *}
 */

// 无权需权限验证，通用路由
export const commonRoutes = [
	// redirect route
	{
		path: '/',
		redirect: '/one/a',
		hidden: true,
	},
	// 404
	{
		path: '*',
		name: 'NotFound',
		hidden: true,
		component: () => import('@/pages/NotFound'),
	},
]

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
	routes: [...commonRoutes],
})
