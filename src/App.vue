<script>
import Navbar from '@/components/Navbar.vue'
export default {
	components: { Navbar },
}
</script>

<template>
	<div class="app">
		<navbar></navbar>
		<main class="app-container">
			<router-view></router-view>
		</main>
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

.app {
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.app-container {
	padding: 20px;
	max-width: 1024px;
	width: 100%;
}
</style>
