import {computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useVilnevStore = defineStore('data', () => {
    const vilnev = reactive({
        title: 'Дени Вильнёв',
        description: 'От экзистенциальных драм до голливудских интеллектуальных блокбастеров',
        questions: [
            {
                text: 'Как называется первый полнометражный фильм Дени Вильнева?',
                variants: ['Водоворот','Бессонница','32 августа на земле','Пожары'],
                answer: '32 августа на земле',
                selectedAnswer: null
            },
            {
                text: 'Как называется его последний на данный момент фильм?',
                variants: ['Пленницы', 'Дюна', 'Бегущий по лезвию 2049', 'Убийца'],
                answer: 'Дюна',
                selectedAnswer: null
            },
            {
                text: 'В чем главная сюжетная линия фильма "Враг"?',
                variants: [
                    'Герой после смерти жены впадает в глубокую депрессию, сопровождающуюся разрушением вещей вокруг него',
                    'Расследование похищения двух девочек',
                    'Герой встречает копию самого себя',
                    'Главнык герои отправляются в восточную страну на поиски своего отца и брата'],
                answer: 'Герой встречает копию самого себя',
                selectedAnswer: null
            }
        ],
    })

    return { vilnev }
})
