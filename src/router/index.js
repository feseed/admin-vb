import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/Layout'

Vue.use(Router)

const routes = [
	{
		path: '/one',
		name: 'nav-1',
		meta: {
			title: 'nav-1',
			icon: 'tag',
		},
		component: Layout,
		children: [
			{
				path: 'a',
				name: 'a',
				meta: {
					title: '1-1',
					icon: 'dot-chart',
				},
				component: () => import('@/pages/Testing'),
			},
			{
				path: 'b',
				name: 'b',
				meta: {
					title: '1-2',
					icon: 'pie-chart',
				},
				component: () => import('@/pages/Testing2'),
			},
			{
				path: 'c',
				name: 'c',
				meta: {
					title: '1-3',
					icon: 'link',
				},
				hidden: true,
				component: () => import('@/pages/Testing'),
			},
		],
	},
	{
		path: '/two',
		name: 'nav-2',
		meta: {
			title: 'nav-2',
			icon: 'paper-clip',
		},
		component: Layout,
		children: [
			{
				path: 'aa',
				name: 'bb',
				meta: {
					title: '2-1',
					icon: 'link',
				},
				component: () => import('@/pages/Testing'),
			},
		],
	},

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

export { routes }

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})
