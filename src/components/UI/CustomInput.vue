<template lang="">
	<input :value="value" @input="updateValue" type="text" class="input" />
</template>
<script>
export default {
	name: 'custom-input',
	props: {
		value: [String, Number],
	},
	methods: {
		updateValue(event) {
			this.$emit('update:value', event.target.value)
		},
	},
}
</script>
<style lang="scss">
.input {
	padding: 10px;
	margin: 2px;
	background-color: #ececec;
	border: none;
	color: #1e1e1e;
	border-radius: 4px;
}
</style>
