<template>
    <div @submit.prevent>
        <input v-model="list.title" type="text" placeholder="Title...">
        <input v-model="list.body" type="text" placeholder="Description...">
        <button @click="createPost">Create</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.list.id = Date.now()
            this.$emit('create', this.list)
            this.list = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped></style>