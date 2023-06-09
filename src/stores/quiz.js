import {computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useQuizStore = defineStore('quiz', () => {
    const state = reactive({
        title: '',
        description: '',
        background: '',
        smallBackground: '',
        questions: [],
        results: {},
        activeQuestion: null,
        finished: false,
        image: ''
    })

    const activeQuestion = computed(() => state.questions[state.activeQuestion])

    const finished = computed(() => state.questions.filter(item => item.selectedAnswer === null).length === 0)

    const answer = computed(() => {
        const truth = state.questions.filter(item => item.answer===item.selectedAnswer).length
        return {true: truth, false: state.questions.length - truth}
    })

    const result = computed(()=>{
        const res = []
        state.questions.forEach(item=>{
            res.push({
                title: item.text,
                rightAnswer: item.answer,
                answer: item.selectedAnswer,
                valid: item.answer === item.selectedAnswer
            })
        })
        return res
    })

    const initialize = (data) =>{
        state.questions = [].concat(data.questions)
        state.title = data.title
        state.background = data.background
        state.smallBackground = data.smallBackground
        state.description = data.description
    }

    const exit = () =>{
        state.activeQuestion = null
        state.finished = false
        state.questions = []
    }

    return { state, activeQuestion, finished, answer, initialize, result, exit}
})
