<template>
    <select class="select">
        <option disabled value="">Select</option>
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
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

<style lang="scss" scoped></style>