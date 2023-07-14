<script>
export default {}
</script>
<template lang="">
	<div class="navbar">
		<div class="navbar-container">
			<div>
				<router-link @click="$router.push('/')" to="/">Vue-posts</router-link>
			</div>
			<nav>
				<ul class="navbar-links">
					<li>
						<custom-button @click="$router.push('/about')" to="/about">
							О сайте
						</custom-button>
					</li>
					<li>
						<custom-button @click="$router.push('/posts/options')">
							Посты (options)
						</custom-button>
					</li>
					<li>
						<custom-button @click="$router.push('/posts/composed')">
							Посты (composed)
						</custom-button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>
<style lang="scss">
.navbar {
	z-index: 1000;
	width: 100%;
	height: 60px;
	background-color: #252525;
	display: flex;
	justify-content: center;

	position: sticky;
	top: 0;
	left: 0;

	color: #eff0ef;
	text-decoration: none;
	font-weight: 600;
	a {
		color: #e7e7e7;
		text-decoration: none;
		font-weight: 600;
	}
	&-container {
		padding: 0 20px;
		max-width: 1024px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
.navbar-links {
	display: flex;
	height: 100%;
	justify-content: center;
	align-self: start;
	li {
		list-style: none;
		margin-right: 12px;
	}
}
</style>
