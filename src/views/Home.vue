<script>
export default {}
</script>

<template lang="">
	<div class="heading">
		<h1 class="heading-title">Привет, это Vue-posts</h1>
		<p class="heading-description">
			Перейти на другие страницы вы можете по навигационной панели выше
		</p>
	</div>
</template>

<style lang="scss">
.heading {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 100%;
	height: 50vh;
}

.heading-title {
	font-size: 54px;
	font-weight: 600;
}
.heading-description {
	font-size: 24px;
}
</style>
