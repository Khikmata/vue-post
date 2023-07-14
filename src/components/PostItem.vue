<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>

<template lang="">
	<div class="post">
		<div class="post-info">
			<div><b>ID:</b> {{ post.id }}</div>
			<div><b>Название: </b>{{ post.title }}</div>
			<div><b>Описание: </b>{{ post.body }}</div>
		</div>
		<div class="post-buttons">
			<custom-button @click="$emit('remove', post)" type="">
				Удалить
			</custom-button>
			<custom-button @click="$router.push(`posts/${post.id}`)"
				>Открыть</custom-button
			>
		</div>
	</div>
</template>

<style lang="scss">
.post {
	margin-top: 12px;
	padding: 15px;
	background-color: rgb(238, 238, 238);
	box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.post-buttons {
	display: flex;
	flex-direction: column;
	margin-left: 12px;
	button {
		margin-bottom: 8px;
	}
}
</style>
