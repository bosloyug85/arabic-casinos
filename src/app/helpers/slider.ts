import { Splide } from '@splidejs/splide'

export default class CardSlider {
    constructor() {}

    init() {
        let splide = new Splide('.js-card-slider', {
            arrows: true,
            perPage: 3,
            pagination: true,
            keyboard: false,
            gap: '20px',
            focus: 'center',
            perMove: 2,
            type: 'slide',
            breakpoints: {
                991: {
                    perPage: 2,
                    gap: '10px',
                },
                575: {
                    perPage: 1,
                },
            },
        })

        splide.mount()
    }
}
