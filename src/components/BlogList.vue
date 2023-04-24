<template>
    <div>
        <div>
            <h1>Posts:</h1>
            <blog-item v-for="post in list" :post="post" />
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
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped></style>