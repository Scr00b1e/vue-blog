<template>
    <select class="select">
        <option v-for="option in options" :value="option.value" :key="option.value" class="option">{{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Object
        }
    }
}
</script>

<style scoped>
.select {
    padding: 5px;
    width: 100%;
    font-size: 16px;
}

.option {
    padding: 5px;
}
</style>