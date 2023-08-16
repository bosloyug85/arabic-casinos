import React from 'react'
import '../../static/scss/components/hero.scss'
import Button from '../Button'

type HeroProps = {
    children?: JSX.Element[]
    title: string
    description: string
    backgroundImage?: string
    backgroundImageMobile?: string
    reverse: string
}

const Hero = (props: HeroProps) => {
    const {
        title,
        description,
        backgroundImage,
        backgroundImageMobile,
        reverse,
        children,
    } = props
    return (
        <section
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="hero"
        >
            <div className="container">
                <div className="hero__content u-text-center">
                    <h1 className="display-1">{title}</h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    <Button
                        btnText="See Top Online Casinos"
                        className="btn--solid"
                        href="#"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
