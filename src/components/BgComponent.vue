<template>
  <div>
    <img v-if="!state.bgBig" :src="getImageUrl($route.path.substring(1))" alt="background" class="bg">
    <img id="bg" :src="store.state.background" alt="background" v-show="state.bgBig" @load="state.bgBig=true" class="bg">
  </div>
</template>

<script setup>
import {useQuizStore} from "@/stores/quiz";
import {onMounted, onUnmounted, reactive} from "vue";
import {useRoute} from "vue-router";

const state = reactive({
  bgBig: false,
})

const getImageUrl = (name) => {
  return new URL(`../assets/images/data/${name}/min.jpg`, import.meta.url).href
}

const store = useQuizStore()

const route = useRoute()

onMounted(()=>{
  const img = document.getElementById('bg')
  img.src=''
})
</script>

<style scoped>
.bg {
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
}
</style>
