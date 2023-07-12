import React from 'react'

const Hero = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 'auto',
                maxWidth: '100%',
            }}
        >
            <div style={{ width: '50%' }}>
                <h1>The Best Arabic Casinos Online</h1>
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
