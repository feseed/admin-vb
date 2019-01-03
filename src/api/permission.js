import Layout from '@/layout/Layout'

const routes = [
	{
		path: '/one',
		name: 'nav-1',
		meta: {
			title: 'nav-1',
			icon: 'tag',
		},
		// component: Layout,
		children: [
			{
				path: 'a',
				name: 'a',
				meta: {
					title: '1-1',
					icon: 'dot-chart',
				},
				componentPath: 'Testing',
				// component: () => import('@/pages/Testing'),
			},
			{
				path: 'b',
				name: 'b',
				meta: {
					title: '1-2',
					icon: 'pie-chart',
				},
				componentPath: 'Testing2',
			},
			{
				path: 'c',
				name: 'c',
				hidden: true,
				meta: {
					title: '1-3',
					icon: 'link',
				},
				componentPath: 'Testing',
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
		children: [
			{
				path: 'aa',
				name: 'bb',
				meta: {
					title: '2-1',
					icon: 'link',
				},
				componentPath: 'Testing',
			},
		],
	},
]

const parserRoutes = (routesMap, level = 0) => {
	return routesMap.map(route => {
		return {
			...route,
			component: level === 0 ? Layout : () => import(`@/pages/${route.componentPath}`),
			children: route.children && parserRoutes(route.children, 1),
		}
	})
}

// 模拟动态获取权限路由
export const fetchRoutes = () => {
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(parserRoutes(routes))
		}, 200)
	})
}
