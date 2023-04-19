<template>
    <div>
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

<style lang="scss" scoped></style>