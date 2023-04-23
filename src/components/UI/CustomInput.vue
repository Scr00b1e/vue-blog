<template>
    <input type="text" class="input" @input="updateInput" :value="modelValue">
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    padding: 5px;
    margin: 10px 0;

    font-size: 18px;
    color: #000;
}

.input:focus {
    outline: none;
}
</style>