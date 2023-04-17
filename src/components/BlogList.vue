<template>
    <div>
        Recently:
        <BlogItem></BlogItem>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue';
export default {
    components: {
        BlogItem
    },
    props: {
        type: Object
    }
}
</script>

<style lang="scss" scoped></style>