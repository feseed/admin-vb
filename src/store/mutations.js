import {
	UPDATE_COLLAPSE,

} from '@/store/mutation-types'

export default {
	[UPDATE_COLLAPSE] (state) {
		state.collapsed = !state.collapsed
	},
	increment (state) {
		state.count++
	},
}
