<template>
    <div class="container">
        <Header></Header>
        <input type="text" placeholder="Title...">
        <!-- <BlogList v-for="posts in list">
            
        </BlogList> -->
        <div v-for="posts in list">
            {{ posts.title }}
            {{ posts.body }}
        </div>
    </div>
</template>

<script>
import BlogList from './components/BlogList.vue';
import Header from './components/Header.vue';
export default {
    components: {
        Header,
        BlogList
    },
    data() {
        return {
            list: [
                { title: 'Hey', body: 'howdy' },
                { title: 'Hey2', body: 'howdy2' },
                { title: 'Hey3', body: 'howdy3' },
            ]
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
