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
              <img v-show="!state.loaded" :src="item.image" @load="readyLoad">
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
import {onMounted, reactive, watch} from "vue";
import axios from "axios";

function load(){
    let counter = 0
    return function (){
        if(counter < store.store.themes.length-1){
            counter++
        }
        else{
            state.loaded=false
        }
    }
}

const readyLoad = load()

const state = reactive({
  loaded: true,
  contents: []
})

watch(()=>state.loaded,()=>{
  if(!state.loaded){
    const images = document.getElementsByClassName('tests__img')
    Array.prototype.forEach.call(images,item=>item.style.animation='none')
  }
})

const store = useMainStore()

onMounted(async ()=>{
  store.store.themes.map(async item => {
    await axios.get('https://cloud-api.yandex.net/v1/disk/resources?path=disk:/Фото для сайта/Киноквиз/'+ item.image,{
      headers: {
        Authorization: 'OAuth y0_AgAAAAA5gcUNAADLWwAAAADflrQT8yQrWUWlTgepDpQVrqxRZ4QSr-I'
      }
    }).then(res=>{
      item.image = res.data.file
    })
    return item
  })
})
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
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
    background-color: #f5f5f5;
    animation: bg 1s infinite;
    box-shadow: 0 0 10px rgba(1,1,1,0.1);
    img {
      width: 100px;
    }
    &:hover {
      scale: 1.05;
      transition: 0.2s;
    }
  }

  @keyframes bg {
    0% {
      background-color: #d0d0d0;
    }
    50% {
      background-color: white;
    }
    100% {
      background-color: #d0d0d0;
    }
  }
}
</style>
