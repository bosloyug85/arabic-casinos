import React, { useEffect } from 'react'
import CardCasino from '../CardCasino'
import { Splide } from '@splidejs/splide'

const MultiCasinoCardContentBlock = ({
    title,
    small_title,
    top_content,
    bottom_list,
    items,
}: any) => {
    useEffect(() => {
        document
            .querySelectorAll('.js-payment-card-slider')
            .forEach(function (element: any) {
                const splide = new Splide(element, {
                    arrows: true,
                    perPage: 1,
                    pagination: false,
                    keyboard: false,
                    gap: '58px',
                    focus: 'center',
                    perMove: 1,
                    type: 'slide',
                    breakpoints: {
                        991: {
                            perPage: 1,
                            gap: '10px',
                        },
                        575: {
                            // focus: "",
                            perPage: 1,
                            arrows: false,
                            pagination: true,
                        },
                    },
                })

                splide.mount()
            })
    }, [])

    return (
        <section className="multi-casino-card-content-block">
            <div className="container">
                <div className="multi-casino-card-content-block__inner u-d-flex">
                    <div className="multi-casino-card-content-block__left">
                        <div className="multi-casino-card-content-block__text">
                            <h2 className="h2">{title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: small_title,
                                }}
                            ></div>
                            <h4 className="h4">{top_content}</h4>
                            <ul>
                                {bottom_list.map((item: any) => (
                                    <li>{item.item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="multi-casino-card-content-block__right">
                        <div className="splide js-payment-card-slider">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {items.map((element: any) => (
                                        <li className="splide__slide">
                                            <CardCasino item={element} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="splide__arrows u-d-flex">
                                <button className="splide__arrow splide__arrow--prev">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 34 34"
                                        width="34"
                                        height="34"
                                        fill="none"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="33"
                                            height="33"
                                            rx="7.5"
                                            fill="#272C33"
                                        />
                                        <path
                                            d="M20.3996 23.7998L13.5996 16.9998L20.3996 10.1998"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="33"
                                            height="33"
                                            rx="7.5"
                                            stroke="#2D323B"
                                        />
                                    </svg>
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 34 34"
                                        width="34"
                                        height="34"
                                        fill="none"
                                    >
                                        <rect
                                            x="33.5"
                                            y="33.5"
                                            width="33"
                                            height="33"
                                            rx="7.5"
                                            transform="rotate(-180 33.5 33.5)"
                                            fill="#272C33"
                                        />
                                        <path
                                            d="M13.6004 10.2002L20.4004 17.0002L13.6004 23.8002"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <rect
                                            x="33.5"
                                            y="33.5"
                                            width="33"
                                            height="33"
                                            rx="7.5"
                                            transform="rotate(-180 33.5 33.5)"
                                            stroke="#2D323B"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiCasinoCardContentBlock
