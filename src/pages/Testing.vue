<template>
	<div class="testing">
		<h1>This is an {{$t('base.test')}} page</h1>
		<button @click="add">add</button> {{count}}
		<button @click="addTodo">addTodo</button> {{countTodo}}
		<p></p>
		<button @click="fetchTest">fetch Test</button>
	</div>
</template>

<script>
import { fetchTesting } from '@/api/testing.js'

export default {
	name: 'testing',
	computed: {
		count () {
			return this.$store.state.count
		},
		countTodo () {
			return this.$store.state.todo.count
		},
	},
	mounted () {
		// console.log('testing: ', this.$store)
	},
	methods: {
		add () {
			this.$store.commit('increment')
		},
		addTodo () {
			this.$store.commit('updateTodo')
		},
		fetchTest () {
			fetchTesting().then(res => {
				console.log('res: ', res)
			}).catch(err => {
				this.$notification.error(err)
			})
		},
	},
}
</script>
