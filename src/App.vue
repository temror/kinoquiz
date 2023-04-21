<script setup>
const storage = () =>{
    localStorage.setItem('number','1')
}
</script>
<template>
  <router-view/>
  <button @click="storage">Storage</button>
</template>

<style lang="scss" scoped>
</style>
