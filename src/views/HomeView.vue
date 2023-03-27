<template>
  <div class="main">
    <h1>Киноопросник</h1>
    <div class="tests">
      <router-link v-for="item in store.store.themes" :to="'/'+item.url">
        <el-popover
            placement="top-start"
            :title="item.title"
            :width="200"
            trigger="hover"
            :content="item.description"
        >
          <template #reference>
            <div class="tests__img">
              <img :src="item.image" alt="jhkh">
            </div>
          </template>
        </el-popover>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {ElPopover} from "element-plus";
import {useMainStore} from "@/data/main/main";

const store = useMainStore()
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-family: "GHEA Grapalat", sans-serif;
    font-weight: lighter;
    font-size: 40px;
  }
}

.tests {
  display: flex;

  a {
    text-decoration: none;
    color: black;
  }

  &__item {
    border: 2px solid #b9b9b9;
    border-radius: 15px;
    margin: 20px;
    padding: 10px;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
      font-family: "GHEA Mariam", sans-serif;
    }
  }
    &__img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    transition: 0.2s;
    overflow: hidden;
      margin: 15px;
    img {
      width: 100px;
    }

    &:hover img {
      scale: 1.05;
      transition: 0.2s;
    }
  }
}
</style>
