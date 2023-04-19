<template>
    <div>
        <div v-for="post in list">
            {{ post.title }}
            {{ post.body }}
        </div>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue';
export default {
    components: {
        BlogItem
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>