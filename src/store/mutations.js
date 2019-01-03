import {
	UPDATE_COLLAPSE,
	ADD_DYNAMIC_ROUTES,
} from '@/store/mutation-types'

export default {
	[UPDATE_COLLAPSE] (state) {
		state.collapsed = !state.collapsed
	},
	[ADD_DYNAMIC_ROUTES] (state, dynamicRoutes) {
		state.dynamicRoutes = dynamicRoutes
	},
	increment (state) {
		state.count++
	},
}
