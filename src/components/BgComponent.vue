<template>
  <div>
    <div v-if="!state.bgBig">
      <img v-if="$route.path.substring(1)==='vilnev'" src="@/assets/images/data/vilnev/min.jpg" alt="background" class="bg">
      <img v-if="$route.path.substring(1)==='nolan'" src="@/assets/images/data/nolan/min.jpg" alt="background" class="bg">
    </div>
    <img id="bg" :src="store.state.background" alt="background" v-show="state.bgBig" @load="state.bgBig=true" class="bg" ref="bg">
  </div>
</template>

<script setup>
import {useQuizStore} from "@/stores/quiz";
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";

const state = reactive({
  bgBig: false,
})

const store = useQuizStore()

const route = useRoute()
</script>

<style scoped>
.bg{
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
}
</style>
