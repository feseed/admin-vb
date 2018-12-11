import {
	update_collapse,

} from '@/store/mutation-types'

export default {
	[update_collapse] (state) {
		state.collapsed = !state.collapsed
	},
	increment (state) {
		state.count++
	},
}
