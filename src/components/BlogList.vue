<template>
    <div>
        <div>
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
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>