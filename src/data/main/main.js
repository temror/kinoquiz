import {computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', () => {
    const store = reactive({
        themes: [
            {
                title: 'Дени Вильнёв',
                description: 'От экзистенциальных драм до голливудских интеллектуальных блокбастеров',
                image: 'avatar.jpg',
                url: 'vilnev'
            },
            {
                title: 'Кристофер Нолан',
                description: 'Патриарх жанра интеллектульного блокбастера',
                image: '88648.jpg',
                url: 'nolan'
            },
        ]
    })

    return { store }
})
