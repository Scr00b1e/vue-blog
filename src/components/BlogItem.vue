<template>
    <div class="item">
        <h1>{{ post.title }}</h1>
        <h3>{{ post.body }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.item {
    padding: 10px;
    margin: 10px 0;
    width: 100%;

    border-radius: 10px;
    border: 1px #000 solid;
}
</style>