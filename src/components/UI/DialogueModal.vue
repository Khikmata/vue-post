<template lang="">
	<div class="dialogue" v-if="show" @click="hide">
		<div @click.stop class="dialogue-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
	name: 'dialogue-modal',
	mixins: [toggleMixin],
}
</script>
<style lang="scss">
.dialogue {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	display: flex;
}
.dialogue-content {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	border-radius: 4px;
	height: 220px;
	width: clamp(300px, 100%, 500px);
	padding: 42px;
}
</style>
