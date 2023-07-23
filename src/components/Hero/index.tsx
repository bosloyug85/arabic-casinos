import React from 'react'
import '../../static/scss/components/hero.scss'
import Example from '../Example'

type HeroProps = {
    children?: JSX.Element[]
    title: string
    description?: string
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
        <div style={{}} className="hero">
            <div className="hero__left">
                <Example
                    onClickHandler={() => console.log('test')}
                    title={'testis'}
                />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="hero__right">
                <img src={backgroundImage} />
            </div>
        </div>
    )
}

export default Hero
