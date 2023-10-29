import ImageComponent from '../Image'
// import '../../static/scss/components/card-slider'
import CardCriteria from '../CardCriteria'
import LeftTitle from '../LeftTitle'
import '../../app/helpers/slider'
import { useEffect } from 'react'
import { Splide } from '@splidejs/splide'
import '@splidejs/react-splide/css/core'

const arrowLeft = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34" fill="none">
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="7.5" fill="#272C33" />
                                    <path d="M20.3996 23.7998L13.5996 16.9998L20.3996 10.1998" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="7.5" stroke="#2D323B" />
                                </svg>
`

const arrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34" fill="none">
    <rect x="33.5" y="33.5" width="33" height="33" rx="7.5" transform="rotate(-180 33.5 33.5)" fill="#272C33" />
    <path d="M13.6004 10.2002L20.4004 17.0002L13.6004 23.8002" stroke="white" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    <rect x="33.5" y="33.5" width="33" height="33" rx="7.5" transform="rotate(-180 33.5 33.5)" stroke="#2D323B" />
</svg>
`

const CardSlider = ({ title, description, items }: any) => {
    useEffect(() => {
        let splide = new Splide('.js-card-slider', {
            arrows: true,
            perPage: 3,
            pagination: true,
            keyboard: false,
            gap: '20px',
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
    }, [])

    return (
        <>
            <LeftTitle title={title} description={description} />
            <section className="card-slider">
                <div className="container">
                    <div className="card-slider__inner">
                        <div className="splide js-card-slider">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {items &&
                                        items.map(
                                            (item: any, index: number) => (
                                                <li
                                                    key={index}
                                                    className="splide__slide"
                                                >
                                                    <CardCriteria item={item} />
                                                </li>
                                            )
                                        )}
                                </ul>
                            </div>
                            <div className="splide__arrows u-d-flex">
                                <button
                                    dangerouslySetInnerHTML={{
                                        __html: arrowLeft,
                                    }}
                                    className="splide__arrow splide__arrow--prev"
                                ></button>
                                <button
                                    dangerouslySetInnerHTML={{
                                        __html: arrowRight,
                                    }}
                                    className="splide__arrow splide__arrow--next"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardSlider
