<script>
import PostItem from './PostItem.vue'
export default {
	components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		},
		paginationClassic: { type: Boolean },
		setPaginationMode: Function,
	},
}
</script>

<template lang="">
	<div v-if="posts.length > 0">
		<div class="post-top">
			<h3>Список постов:</h3>
			<div class="post-top__btns">
				<custom-button
					@click="setPaginationMode(false)"
					:class="{ active: !paginationClassic }"
					>Бесконечная лента</custom-button
				>
				<!-- <custom-button
					@click="setPaginationMode(true)"
					:class="{ active: paginationClassic }"
					>Обычная пагинация</custom-button
				> -->
			</div>
		</div>
		<transition-group name="list">
			<post-item
				v-for="post in posts"
				:post="post"
				:key="post.id"
				@remove="$emit('remove', post)" />
		</transition-group>
	</div>
	<div v-else>Список постов пуст</div>
</template>

<style lang="scss" scoped>
.list-enter-active,
.list-move,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.post-top {
	display: flex;
	justify-content: space-between;
	&__btns {
		display: flex;
		button {
			margin-right: 4px;
			background-color: #e1e1e1;
			color: #1e1e1e;
			:hover {
				background-color: #cecece;
			}
		}
		.active {
			outline: 2px solid #1e1e1e;
		}
	}
}
</style>
