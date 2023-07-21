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
                {children && children}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ultrices posuere felis, eu efficitur eros dapibus a.
                    Nunc rutrum fringilla metus, id aliquam neque dignissim sit
                    amet. Suspendisse tincidunt, mauris in volutpat commodo,
                    nulla tellus congue tortor, vel tempus libero justo in justo
                    tincidunt, mauris in volutpat commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ultrices posuere felis, eu efficitur eros dapibus a.
                    Nunc rutrum fringilla metus, id aliquam neque dignissim sit
                    amet. Suspendisse tincidunt, mauris in volutpat commodo,
                    nulla tellus congue tortor, vel tempus libero justo in justo
                    tincidunt, mauris in volutpat commodo.
                </p>
            </div>
            <div style={{ width: '50%' }}>
                <img style={{ width: '100%' }} src="/images/hero-image.png" />
            </div>
        </div>
    )
}

export default Hero
