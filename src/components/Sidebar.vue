<template>
    <aside>
        <custom-input></custom-input>
        <select class="select">
            <option disabled value="">Select</option>
            <option value="">Title</option>
            <option value="">Description</option>
        </select>
    </aside>
</template>

<script>
import CustomInput from './UI/CustomInput.vue';
export default {
    components: {
        CustomInput
    }
}
</script>

<style scoped>
.select {
    width: 100%;
    font-size: 14px;
}
</style>