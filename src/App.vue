<template>
    <div class="container">
        <div class="app">
            <Header></Header>
            <div>
                <blog-form @create="createPost" />
                <blog-list :list="list" />
            </div>
        </div>
    </div>
</template>

<script>
import BlogForm from './components/BlogForm.vue';
import BlogList from './components/BlogList.vue';
import Header from './components/Header.vue';
import axios from 'axios'
export default {
    components: {
        Header,
        BlogList,
        BlogForm
    },
    data() {
        return {
            list: [],
        }
    },
    methods: {
        createPost(list) {
            this.list.push(list)
        },
        async getData() {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts?limit=10')
                this.list = res.data
            } catch {
                alert('Something is wrong...')
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
}

.app {
    position: relative;
    padding-top: 50px;
}
</style>
