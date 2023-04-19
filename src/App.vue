<template>
    <div class="container">
        <Header></Header>
        <div>
            <blog-form />
            <blog-list :list="list" @create="createPost" />
        </div>
    </div>
</template>

<script>
import BlogForm from './components/BlogForm.vue';
import BlogList from './components/BlogList.vue';
import Header from './components/Header.vue';
export default {
    components: {
        Header,
        BlogList,
        BlogForm
    },
    data() {
        return {
            list: [
                { title: 'Hey', body: 'howdy' },
                { title: 'Hey2', body: 'howdy2' },
                { title: 'Hey3', body: 'howdy3' },
            ],
        }
    },
    methods: {
        createPost(list) {

        }
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
</style>
