<template>
    <img v-if="route.path.substring(1)==='vilnev'" src='@/assets/images/data/vilnev/bg.png' alt="dsfsdf" class="bg">
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style scoped>

</style>
