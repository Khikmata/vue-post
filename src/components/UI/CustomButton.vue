<template lang="">
	<button>
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'custom-button',
}
</script>
<style lang="scss" scoped>
button {
	padding: 8px 4px;
	background: transparent;
	color: aliceblue;
	border-radius: 4px;
	background-color: #575757;
	border: none;
	cursor: pointer;
	&:hover {
		background: rgb(128, 128, 128);
		color: white;
	}
}
</style>
