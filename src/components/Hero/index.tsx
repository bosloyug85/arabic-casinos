import React from 'react'
import '../../static/scss/components/hero.scss'

type HeroProps = {
    children?: JSX.Element[]
    title: string
    description?: string
    backgroundImage?: string
    backgroundImageMobile?: string
    reverse?: string
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
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: reverse ?? 'initial',
                width: 'auto',
                maxWidth: '100%',
            }}
            className="hero"
        >
            <div style={{ width: '50%' }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div style={{ width: '50%' }}>
                <img style={{ width: '100%' }} src={backgroundImage} />
            </div>
        </div>
    )
}

export default Hero
