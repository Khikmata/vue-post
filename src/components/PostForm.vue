<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now()
			this.$emit('create', this.post)
			this.post = {
				title: '',
				body: '',
			}
		},
	},
}
</script>

<template lang="">
	<div>
		<form @submit.prevent class="form">
			<custom-input
				v-focus
				v-model:value="post.title"
				class="input"
				type="text"
				placeholder="Название поста" />

			<custom-input
				v-model:value="post.body"
				class="input"
				type="text"
				placeholder="Описание" />

			<custom-button type="" @click="createPost"> Создать </custom-button>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
}
</style>
