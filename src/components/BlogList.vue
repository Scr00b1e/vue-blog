<template>
    <div>
        <div v-if="list.length > 0">
            <h1>Posts:</h1>
            <transition-group name="blog-list">
                <blog-item v-for="post in list" :post="post" :key="post.id" />
            </transition-group>
        </div>
        <h1 v-else>Not Found</h1>
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

<style scoped>
.blog-list-move,
.blog-list-enter-active,
.blog-list-leave-active {
    transition: all 0.5s ease;
}

.blog-list-enter-from,
.blog-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>