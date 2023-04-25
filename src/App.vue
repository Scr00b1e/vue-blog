<template>
    <div class="container">
        <div class="app">
            <Header></Header>
            <RouterView />
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
export default {
    components: {
        Header,
        RouterView
    },
}
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
}

.container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
}

.app {
    position: relative;
    padding-top: 50px;
}
</style>
