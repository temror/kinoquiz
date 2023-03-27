<template>
  <BgComponent/>
  <div class="wrapper" ref="wrapper">
    <div class="header" v-if="store.state.activeQuestion===null">
      <h1>{{store.state.title}}</h1>
      <h2>{{store.state.description}}</h2>
      <el-button size="large" v-if="true" @click="()=>store.state.activeQuestion=0">Начать тестирование</el-button>
    </div>
    <div class="content" v-if="store.state.activeQuestion!==null">
      <div class="questions" v-if="!store.state.finished">
        <p>Вопрос {{store.state.activeQuestion+1}}/{{store.state.questions.length}}</p>
        <h2>{{store.activeQuestion.text}}</h2>
        <div v-for="(variant) in store.activeQuestion.variants" class="questions__content">
          <input type="radio" v-model="store.state.questions.filter(item => store.activeQuestion.text === item.text)[0].selectedAnswer" :value="variant" :id="variant">
          <label :for="variant">{{ variant }}</label>
        </div>
        <div class="questions__buttons">
          <div class="questions__navigate">
            <el-button @click="store.state.activeQuestion--" :disabled="store.state.activeQuestion===0">Назад</el-button>
            <el-button @click="store.state.activeQuestion++" :disabled="store.state.activeQuestion===store.state.questions.length-1">Вперед</el-button>
          </div>
          <el-button type="success" v-if="store.finished&&store.state.activeQuestion===store.state.questions.length-1" @click="store.state.finished = true">Завершить</el-button>
        </div>
      </div>
      <div class="results" v-if="store.state.finished">
        <h1>Результаты</h1>
        <div class="results__check">
          <div v-for="(answer,index) in store.result" style="margin-bottom: 30px" class="results__ques">
            <span style="">Вопрос №{{index+1}}:</span>
            <p style="font-size: 22px; margin-top: 10px">{{answer.title}}</p>
            <p :style="{color: answer.valid ? 'rgb(42,169,45)' : 'rgb(171,42,42)'}"><span>Ваш ответ: </span>{{answer.answer}}</p>
            <p v-if="!answer.valid"><span>Правильный ответ: </span>{{answer.rightAnswer}}</p>
          </div>
        </div>
        <p style="padding-bottom: 10px">Результат: {{store.answer.true}}/{{store.state.questions.length}}</p>
        <el-button type="primary" size="large" @click="exit">Выбрать другой тест</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ElRadioGroup, ElRadio, ElButton} from "element-plus";
import {useQuizStore} from "@/stores/quiz";
import {computed, onMounted, reactive, ref} from "vue";
import {data} from "@/data/data";
import {useRoute, useRouter} from "vue-router";
import BgComponent from "@/components/BgComponent.vue";

const store = useQuizStore()

const log = () =>{
  console.log('bg')
}

const state = reactive({
  bgBig: false
})

const router = useRouter()
const route = useRoute()

const exit = () =>{
  router.push('/')
  store.exit()
}



onMounted(()=>{
  const dataStore = data[route.path.substring(1)]()
  store.initialize(dataStore.store)
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.bg{
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
}
.wrapper{
  height: 100%;
  @include flex-center;
  .header{
    @include flex-center;
    h1{
      margin: 0;
      color: #ffffff;
      font-family: "Tulpen One", sans-serif;
      font-size: 6rem;
      text-shadow: 0 0 10px rgba(1,1,1,0.3);
    }
    h2{
      color: white;
      text-shadow: 0 0 10px rgba(1,1,1,0.6);
      font-family: "Tulpen One", sans-serif;
      font-weight: lighter;
      font-size: 2rem;
      width: 60rem;
      text-align: center;
    }
    background-color: rgba(0,0,0,0.5);
    padding: 40px 20px;
    border-radius: 20px;
  }
  .content{
    background-color: #ffffff;
    padding: 40px 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(1,1,1,0.3);
    width: 40rem;
    max-height: 40rem;
    overflow: scroll;
  }
  .questions{
    h2{
      font-weight: normal;
      margin-bottom: 40px;
    }
    &__content{
      display: flex;
      align-items: flex-start;
      margin: 20px 10px;
      input{
        margin-right: 10px;
        cursor: pointer;
      }
      label{
        font-family: Dialog, sans-serif;
        color: #3b3b3b;
        cursor: pointer;
      }
    }
    &__buttons{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__navigate{
      margin: 20px 0;
    }
  }
  .results{
    h1{
      color: #3b3b3b;
      font-family: "Tulpen One", sans-serif;
      font-weight: normal;
      font-size: 2rem;
    }
    &__check{
      p{

      }
      span{
        font-size: 14px;
        color: #a4a4a4;
      }
    }
    &__ques{
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(1,1,1,0.1);
    }
  }
}
</style>
