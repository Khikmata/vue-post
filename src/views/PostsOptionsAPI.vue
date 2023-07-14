<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import PostPagination from '@/components/PostPagination.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import CustomSelect from '@/components/UI/CustomSelect.vue'
import DialogueModal from '@/components/UI/DialogueModal.vue'
import axios from 'axios'

export default {
	components: {
		PostForm,
		PostList,
		DialogueModal,
		CustomButton,
		DialogueModal,
		CustomSelect,
		CustomInput,
		PostPagination,
	},
	data() {
		return {
			posts: [],
			dialogueVisible: false,
			isPostsLoading: false,
			selectedSort: '',
			searchQuery: '',
			paginationClassic: false,
			limit: 10,
			totalPages: 0,
			page: 1,
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержимому' },
				{ value: 'id', name: 'По id' },
			],
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post)
		},
		removePost(post) {
			this.posts = this.posts.filter((p) => p.id !== post.id)
		},
		showDialogue() {
			this.dialogueVisible = true
		},
		setPaginationMode(paginationMode) {
			this.paginationClassic = paginationMode
		},
		async fetchPosts() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?',
					{ params: { _page: this.page, _limit: this.limit } }
				)
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				)
				if (this.page <= this.totalPages + 1) {
					this.page += 1
					this.posts = [...this.posts, ...response.data]
				}
			} catch (error) {
				alert(error)
			}
		},
		setPage(pageIndex) {
			this.page = pageIndex
		},
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) => {
				if (this.selectedSort === 'id') {
					return a - b
				}
				return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
			})
		},
		sortedAndSearchedPosts() {
			return this.sortedPosts.filter((post) =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			)
		},
	},
}
</script>

<template>
	<h1>Страница с постами</h1>
	<div class="post__filters">
		<custom-input
			v-focus
			v-model:value="searchQuery"
			placeholder="Поиск..."></custom-input>
		<div class="post__btns">
			<custom-button @click="showDialogue">Добавить пост</custom-button>
			<custom-select v-model="selectedSort" :options="sortOptions" />
		</div>
	</div>
	<DialogueModal v-model:show="dialogueVisible">
		<PostForm :createPost="createPost" @create="createPost" />
	</DialogueModal>
	<PostList
		:paginationClassic="paginationClassic"
		:setPaginationMode="setPaginationMode"
		:posts="sortedAndSearchedPosts"
		@remove="removePost"
		v-if="!isPostsLoading" />
	<div v-else>Идет загрузка...</div>
	<!-- <PostPagination
			v-if="paginationClassic"
			:limit="limit"
			:totalPages="totalPages"
			:page="page"
			:setPage="setPage" />\
			-->
	<div v-intersection="fetchPosts" v-if="!paginationClassic"></div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

.post__btns {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	height: 100%;
	button {
		margin-right: 4px;
	}
}

.btn {
	margin: 12px 0;
}

.post__filters {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 12px;
}
</style>
