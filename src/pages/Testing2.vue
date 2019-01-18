<template>
	<div class="testing">
		<h1>This is an {{$t('base.test')}} 222 page</h1>
		<button @click="add">add</button> {{count}}
		<button @click="addTodo">addTodo</button> {{countTodo}}

	</div>
</template>

<script>
export default {
	name: 'testing2',
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
	},
}
</script>
