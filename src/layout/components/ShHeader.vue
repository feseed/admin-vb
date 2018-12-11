<template>
	<header class="layout__header">
		<div class="header-content">
			<v-icon class="header-trigger" :type="this.collapsed ? 'menu-unfold' : 'menu-fold'" @click.native="handlerToggle"></v-icon>
		</div>
	</header>
</template>

<script>
import { update_collapse } from '@/store/mutation-types'

export default {
	name: 'ShHeader',
	computed: {
		collapsed () {
			return this.$store.state.collapsed
		},
	},
	methods: {
		handlerToggle () {
			this.$store.commit(update_collapse)
		},
	},
}
</script>

<style>
.layout__header {
	display: flex;
	align-items: center;
	height: 60px;
	width: 100%;
	background-color: #fff;
}
.layout__header .header-trigger {
	font-size: 22px;
}
.layout__header .header-content {
	display: flex;
	flex: 1;
	align-items: center;
	height: 100%;
	padding: 0 20px;
}
</style>

