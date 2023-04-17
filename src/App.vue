<template>
    <div class="container">
        <Header></Header>
        <input type="text" placeholder="Title...">
        <BlogList></BlogList>
    </div>
</template>

<script>
import BlogList from './components/BlogList.vue';
import Header from './components/Header.vue';
export default {
    components: {
        Header,
        BlogList
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
