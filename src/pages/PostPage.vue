<template>
    <div class="app__content">
        <div class="app__left">
            <blog-form @create="createPost" />
            <blog-list :list="searchPosts" v-if="!loading" />
            <h1 v-else>Loading...</h1>
        </div>
        <div class="app__right">
            <custom-input placeholder="Search..." v-model="searchQuery" />
            <custom-select :options="sortOptions" :searchQuery="searchQuery" />
        </div>
    </div>
</template>

<script>
import BlogForm from '../components/BlogForm.vue';
import BlogList from '../components/BlogList.vue';
import CustomInput from '../components/UI/CustomInput.vue';
import CustomSelect from '../components/UI/CustomSelect.vue';
import axios from 'axios'
export default {
    components: {
        BlogList,
        BlogForm,
        CustomInput,
        CustomSelect,
    },
    data() {
        return {
            list: [],
            loading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                { value: 'title', name: 'Title' },
                { value: 'body', name: 'Description' }
            ]
        }
    },
    methods: {
        createPost(lists) {
            this.list.push(lists)
        },
        async getData() {
            this.loading = true
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.list = res.data
            } catch {
                alert('Something is wrong...')
            }
            finally {
                this.loading = false
            }
        }
    },
    mounted() {
        this.getData()
    },
    computed: {
        sortPosts() {
            return [...this.list].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        searchPosts() {
            return this.sortPosts.filter(obj => obj.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    }
}
</script>

<style scoped>
.app__content {
    display: flex;
    justify-content: space-between;
}

.app__left {
    width: 80%;
}

.app__right {
    width: 20%;
    margin-left: 20px;
}
</style>