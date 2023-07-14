<template>
	<h1>Страница с постами</h1>
	<div class="post__filters">
		<custom-input
			v-focus="true"
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
		@remove="removePost" />
	<div v-intersection="fetchPosts" v-if="!paginationClassic"></div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import CustomSelect from '@/components/UI/CustomSelect.vue'
import DialogueModal from '@/components/UI/DialogueModal.vue'
import axios from 'axios'
import { computed, ref } from 'vue'

export default {
	components: {
		PostForm,
		PostList,
		DialogueModal,
		CustomButton,
		CustomSelect,
		CustomInput,
	},
	setup() {
		const posts = ref([])
		const dialogueVisible = ref(false)

		const selectedSort = ref('')
		const searchQuery = ref('')
		const paginationClassic = ref(false)
		const limit = 10
		let totalPages = 0
		let page = 1

		const sortOptions = ref([
			{ value: 'title', name: 'По названию' },
			{ value: 'body', name: 'По содержимому' },
			{ value: 'id', name: 'По id' },
		])

		function createPost(post) {
			posts.value.push(post)
		}

		function removePost(post) {
			posts.value = posts.value.filter((p) => p.id !== post.id)
		}

		function showDialogue() {
			dialogueVisible.value = true
		}

		function setPaginationMode(paginationMode) {
			paginationClassic.value = paginationMode
		}

		async function fetchPosts() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: { _page: page, _limit: limit },
					}
				)
				totalPages = Math.ceil(response.headers['x-total-count'] / limit)
				if (page <= totalPages + 1) {
					page += 1
					posts.value = [...posts.value, ...response.data]
				}
			} catch (error) {
				alert(error)
			}
		}

		function setPage(pageIndex) {
			page = pageIndex
		}

		const sortedPosts = computed(() => {
			return [...posts.value].sort((a, b) => {
				if (selectedSort.value === 'id') {
					return a - b
				}
				return a[selectedSort.value]?.localeCompare(b[selectedSort.value])
			})
		})

		const sortedAndSearchedPosts = computed(() => {
			return sortedPosts.value.filter((post) =>
				post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			)
		})

		return {
			posts,
			dialogueVisible,
			selectedSort,
			searchQuery,
			paginationClassic,
			limit,
			totalPages,
			page,
			sortOptions,
			createPost,
			removePost,
			showDialogue,
			setPaginationMode,
			fetchPosts,
			setPage,
			sortedPosts,
			sortedAndSearchedPosts,
		}
	},
}
</script>

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
