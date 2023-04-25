<template>
    <div>
        <button @click="$router.push('/posts')">back</button>
        post id = {{ $route.params.id }}
    </div>
</template>

<script>
import router from '../router';

export default {

}
</script>

<style scoped></style>