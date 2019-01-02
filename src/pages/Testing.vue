<template>
	<div class="testing">
		<h1>This is an {{$t('base.test')}} page</h1>
		<button @click="add">add</button> {{count}}
		<button @click="addTodo">addTodo</button> {{countTodo}}
	</div>
</template>

<script>
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
	methods: {
		add () {
			this.$store.commit('increment')
		},
		addTodo () {
			this.$store.commit('updateTodo')
		},
	},
	mounted () {
		// console.log('testing: ', this.$store)
	},
}
</script>
