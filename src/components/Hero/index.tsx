import React from 'react'
import '../../static/scss/components/hero.scss'

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
        <div style={{ backgroundImage: backgroundImage }} className="hero">
            <div className="hero__content">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                <a className="btn btn--solid" href="#">
                    <span className="btn__text">See Top Online Casinos</span>
                </a>
            </div>
        </div>
    )
}

export default Hero
