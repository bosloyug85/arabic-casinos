import React from 'react'

const Partner = (props: any) => {
    const { imgSrc, title, bonus, buttonText } = props
    return (
        <div className="partners u-d-flex u-align-center">
            <div className="partners__image">
                <img src={imgSrc} alt="Partner Image" />
            </div>
            <div className="partners__title">
                <strong>{title}</strong>
                <small>{bonus}</small>
            </div>
            <div className="partners__rating">
                {/* Add rating content here */}
            </div>
            <div className="partners__cta u-d-flex">
                <a className="btn--outline btn--primary" href="#">
                    Read Review
                </a>
                <a className="btn--solid btn--primary" href="#">
                    {buttonText}
                </a>
            </div>
        </div>
    )
}

export default Partner
