import {computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useNolanStore = defineStore('nolan', () => {
    const store = reactive({
        title: 'Кристофер Нолан',
        description: 'Патриарх жанра интеллектульного блокбастера',
        background: 'https://clck.ru/33su4c',
        questions: [
            {
                text: 'Какой самый глубокий уровень сна в фильме "Начало?"?',
                variants: ['2','3','4','5'],
                answer: '3',
                selectedAnswer: null
            },
            {
                text: 'Как называлась черная дыра в фильме "Интерстеллар"?',
                variants: ['Пантагрюэль', 'Гаргантюа', 'Сэнкюлот', 'Тюдор'],
                answer: 'Гаргантюа',
                selectedAnswer: null
            },
            {
                text: 'В чем главная особенность фильма "Помни"?',
                variants: [
                    'Сюжет фильма идет задом наперед',
                    'Весб фильм является сном главного героя',
                    'Фильм разделен на главы, названные в честь кулинарных блюд',
                    'Фильм снят одним кадром'],
                answer: 'Сюжет фильма идет задом наперед',
                selectedAnswer: null
            },
            {
                text: 'Какой режиссер экранизировал первую часть "Бегущего по лезвию"?',
                variants: [
                    'Стивен Спилберг',
                    'Риддли Скотт',
                    'Джордж Лукас',
                    'Стэнли Кубрик'],
                answer: 'Риддли Скотт',
                selectedAnswer: null
            },
            {
                text: 'Какой из фильмов Вильнева имеет второе название "Sicario"?',
                variants: [
                    'Враг',
                    'Убийца',
                    'Пленницы',
                    'Пожары'
                ],
                answer: 'Убийца',
                selectedAnswer: null
            },
            {
                text: 'Какое название люди дали пришельцам из фильма "Прибытие"?',
                variants: [
                    'Синтаподы',
                    'Гептаподы',
                    'Октоподы',
                    'Катроподы'
                ],
                answer: 'Гептаподы',
                selectedAnswer: null
            }
        ],
    })

    return { store }
})
