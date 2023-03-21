<template>
  <div class="main">
    <h1>Киноопросник</h1>
    <div class="tests">
      <router-link to="/vilnev">
        <el-popover
            placement="top-start"
            title="Дэни Вильнев"
            :width="200"
            trigger="hover"
            content="канадский режиссер"
        >
          <template #reference>
            <div class="tests__img">
              <img src="@/assets/images/data/vilnev/avatar.jpg" alt="jhkh">
            </div>
          </template>
        </el-popover>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {ElPopover} from "element-plus";
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
      margin-bottom: 20px;
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
