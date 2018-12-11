<template>
	<v-sider collapsible :collapsed="collapsed" :trigger="false" :collapsed-width="64" class="layout__sider-bar">
		<div class="logo">LOGO</div>
		<v-menu theme="dark" mode="inline" :data="sideMenuRoutes" :inline-collapsed="collapsed">
			<template slot-scope="{data}">
				<router-link :to="data.href">
					<i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
					<span class="nav-text">{{data.name}}</span>
				</router-link>
			</template>
		</v-menu>
	</v-sider>
</template>

<script>
import { routes } from '@/router/index'

export default {
	name: 'SiderBar',
	props: {
		currentPath: {
			type: String,
		},
	},
	data () {
		return {
			sideMenuRoutes: [],
		}
	},
	computed: {
		collapsed () {
			return this.$store.state.collapsed
		},
	},
	mounted () {
		// 生成侧边导航栏
		this.generateSideRoutes()
	},
	methods: {
		generateSideRoutes () {
			let parseSideRoutes = (routeList, currentPath = '') => {
				return routeList.filter(item => !item.hidden).map(route => {
					route.href = `${currentPath}${currentPath ? '/' : ''}${route.path}`
					let isExpand = this.$route.matched[0].path === route.href
					let isSelected = this.$route.fullPath === route.href

					let data = {
						name: route.meta.title,
						icon: route.meta.icon,
						href: route.href,
						expand: isExpand,
						selected: isSelected,
						children: route.children ? parseSideRoutes(route.children, route.href) : null,
					}
					return data
				})
			}
			this.sideMenuRoutes = parseSideRoutes(routes)
			console.log('this.sideMenuRoutes: ', this.sideMenuRoutes)
		},
	},
}
</script>

<style>
.layout__sider-bar {
	background-color: #333a4e;
}
.layout__sider-bar .logo {
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #fff;
	background-color: #333a4e;
}
.layout__sider-bar.ant-layout-sider {
	background: #333a4e;
}
.layout__sider-bar .ant-menu-inline .ant-menu-item,
.layout__sider-bar .ant-menu-inline .ant-menu-submenu-title
{
	text-align: left !important;
	font-size: 16px;
	height: 60px !important;
	line-height: 60px !important;
	background-color: #333a4e;
}

.layout__sider-bar .ant-menu-inline .ant-menu-item.ant-menu-item-selected {
	background-color: #108ee9;
}

.layout__sider-bar .ant-menu-inline .ant-menu-submenu-inline.ant-menu-submenu-open > .ant-menu-submenu-title
{
	border-left: 3px solid #4a90e2;
	background-color: #3e445c;
}

.layout__sider-bar .ant-menu-dark,
.layout__sider-bar .ant-menu-dark .ant-menu-sub
{
	background-color: #333a4e;
}
</style>
