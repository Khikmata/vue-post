import { createRouter, createWebHistory } from 'vue-router'
import AboutVue from '../views/About.vue'
import HomeVue from '../views/Home.vue'
import PostDetailsVue from '../views/PostDetails.vue'
import PostsComposedAPIVue from '../views/PostsComposedAPI.vue'
import PostsOptionsAPIVue from '../views/PostsOptionsAPI.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeVue,
	},
	{
		path: '/posts/composed',
		name: 'posts-composed',
		component: PostsComposedAPIVue,
	},
	{
		path: '/posts/options',
		name: 'posts-options',
		component: PostsOptionsAPIVue,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutVue,
	},
	{
		path: '/posts/:id',
		name: 'postDetails',
		component: PostDetailsVue,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
