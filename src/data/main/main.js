import {computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', () => {
    const store = reactive({
        themes: [
            {
                title: 'Дени Вильнёв',
                description: 'От экзистенциальных драм до голливудских интеллектуальных блокбастеров',
                image: 'https://clck.ru/33stZe',
                url: 'vilnev'
            },
            {
                title: 'Кристофер Нолан',
                description: 'Патриарх жанра интеллектульного блокбастера',
                image: 'https://clck.ru/33stqm',
                url: 'nolan'
            },
        ]
    })

    return { store }
})
