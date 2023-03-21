<template>
  <div class="wrapper"  :style="{background: `url('src/assets/images/data/${route.path.substring(1)}/bg.png')`}">
    <div class="header" v-if="store.state.activeQuestion===null">
      <h1>{{store.state.title}}</h1>
      <h2>{{store.state.description}}</h2>
      <el-button size="large" v-if="true" @click="()=>store.state.activeQuestion=0">Начать тестирование</el-button>
    </div>
    <div class="content" v-if="store.state.activeQuestion!==null">
      <div class="questions" v-if="!store.state.finished">
        <h2>{{store.activeQuestion.text}}</h2>
        <div v-for="(variant) in store.activeQuestion.variants" class="questions__content">
          <input type="radio" v-model="store.state.questions.filter(item => store.activeQuestion.text === item.text)[0].selectedAnswer" :value="variant">
          <label>{{ variant }}</label>
        </div>
        <div class="questions__buttons">
          <div class="questions__navigate">
            <el-button @click="store.state.activeQuestion--" :disabled="store.state.activeQuestion===0">Назад</el-button>
            <el-button @click="store.state.activeQuestion++" :disabled="store.state.activeQuestion===store.state.questions.length-1">Вперед</el-button>
          </div>
          <el-button type="success" v-if="store.finished&&store.state.activeQuestion===store.state.questions.length-1" @click="finish">Завершить</el-button>
        </div>
      </div>
      <div class="results" v-if="store.state.finished">
        <h1>Результаты</h1>
        <div class="results__check">
          <p v-for="answer in store.result">
            <span>Вопрос: {{answer.title}}</span><br>
            <span >Правильный ответ: {{answer.rightAnswer}}</span><br>
            <span :style="{color: answer.valid ? 'darkgreen' : '#e02d2d'}">Ваш ответ: {{answer.answer}}</span>
          </p>
        </div>
        <p>Правильных ответов: {{store.answer.true}}</p>
        <p>Неправильных ответов: {{store.answer.false}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ElRadioGroup, ElRadio, ElButton} from "element-plus";
import {useQuizStore} from "@/stores/modules/quiz";
import {onMounted} from "vue";
import {data} from "@/data/data";
import {useRoute} from "vue-router";

const store = useQuizStore()
const route = useRoute()

const finish = ( ) =>{
  store.state.finished = true
  console.log(store.result)
}

onMounted(()=>{
  const dataStore = data[route.path.substring(1)]()
  store.initialize(dataStore.vilnev)
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";
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
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(1,1,1,0.3);
    width: 40rem;
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
    &__check{
      h1{
        font-family: "Tulpen One", sans-serif;
        font-size: 6rem;
        font-weight: normal;
      }
    }
  }
}
</style>
