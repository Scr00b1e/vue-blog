<template>
    <aside>
        <custom-select :options="options" />
    </aside>
</template>

<script>
import CustomInput from './UI/CustomInput.vue';
import CustomSelect from './UI/CustomSelect.vue';
export default {
    components: {
        CustomInput,
        CustomSelect
    },
    props: {
        options: {
            type: Object
        },
    },
}
</script>

<style scoped>
.select {
    width: 100%;
    font-size: 14px;
}
</style>