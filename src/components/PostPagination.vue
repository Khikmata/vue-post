<script>
export default {
	props: {
		totalPages: { type: Number },
		limit: { type: Number },
		page: { type: Number },
		setPage: { type: Function },
	},
}
</script>

<template>
	<div class="page__wrapper">
		<div
			v-for="pageIndex in totalPages"
			:key="pageIndex"
			@click="setPage(pageIndex)"
			class="page"
			:class="{ 'current-page': page === pageIndex }">
			{{ pageIndex }}
		</div>
	</div>
</template>

<style lang="scss">
.page {
	border-radius: 50%;
	background-color: #e2e2e2;
	margin-right: 8px;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	&__wrapper {
		display: flex;
		margin-top: 15px;
		justify-content: flex-start;
		align-items: center;
	}
}
.current-page {
	outline: 2px solid #232423;
	font-weight: 500;
}
</style>
