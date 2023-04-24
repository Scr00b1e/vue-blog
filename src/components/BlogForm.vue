<template>
    <form @submit.prevent class="form">
        <!-- <input v-model="list.title" type="text" placeholder="Title...">
        <input v-model="list.body" type="text" placeholder="Description..."> -->
        <custom-input v-model="list.title" placeholder="Title..." />
        <custom-input v-model="list.body" placeholder="Description..." />
        <div>
            <button @click="createPost">Create</button>
        </div>
    </form>
</template>

<script>
import CustomInput from './UI/CustomInput.vue'
export default {
    components: {
        CustomInput
    },
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

<style scoped>
.form {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>