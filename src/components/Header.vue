<template>
    <div class="header">
        <a href="/" class="header__link">
            Blog
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    width: 100%;
    padding: 10px 70px;
    border-bottom: 3px #000 solid;
    background: #fff;
}

.header__link {
    text-decoration: none;
    color: #000;
    font-size: 20px;
}
</style>