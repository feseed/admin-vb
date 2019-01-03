import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		stateRoot: 'root',
		dynamicRoutes: [],
		collapsed: false,
		count: 0,
	},

	actions,
	mutations,

	modules: {
		todo,
	},
})
