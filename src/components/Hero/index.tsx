import React, { useEffect } from 'react'
// import '../../static/scss/components/hero.scss'
import Button from '../Button'
import ImageComponent from '../Image'

type HeroProps = {
    children?: JSX.Element[]
    title: string
    content: string | JSX.Element
    btnHref?: string
    btnText?: string
    bgImage?: string
}

const Hero = (props: HeroProps) => {
    const { title, content, btnHref, btnText, bgImage, children } = props

    useEffect(() => {
        var header: any = document.querySelector('.js-header')
        var headerHeight = () => {
            document.documentElement.style.setProperty(
                '--header-height',
                `${header.clientHeight}px`
            )
            document.documentElement.style.setProperty(
                '--header-height-fixed',
                `${header.clientHeight}px`
            )
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > window.innerHeight) {
                headerHeight()
            }
        })
        headerHeight()
    }, [])

    return (
        <section className="hero">
            <div className="container u-d-flex u-justify-center u-align-center">
                <div className="hero__content u-text-center">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>

                    {btnHref ? (
                        <Button
                            className="btn--solid btn--primary"
                            href={btnHref}
                            btnText={btnText}
                        />
                    ) : null}
                </div>
            </div>

            {bgImage ? (
                <ImageComponent
                    className="hero__bg"
                    lazy={false}
                    img_url={bgImage}
                    mobile_img_url={bgImage}
                    desktop_img_url={bgImage}
                />
            ) : null}
        </section>
    )
}

export default Hero
