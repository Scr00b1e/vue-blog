<template>
    <div class="container">
        <Header></Header>
        <input v-bind:value="title" @input="title = $event.target.value" type="text" placeholder="Title...">
        <input v-bind:value="body" @input="body = $event.target.value" type="text" placeholder="Description...">
        <button @click="onAdd">Create</button>
        <!-- <BlogList v-for="posts in list"></BlogList> -->
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
            ],
            title: '',
            body: ''
        }
    },
    methods: {
        onAdd() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.list.push(newPost)
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
