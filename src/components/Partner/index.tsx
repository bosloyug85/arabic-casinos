import React from 'react'
import star from '../../static/vectors/star.svg'
import Button from '../Button'
import StarVector from '../StarVector'

const Partner = (props: any) => {
    const { imgSrc, title, bonus, buttonText } = props
    let stars = [1, 2, 3, 4, 5]
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
                {stars.map((item: any) => (
                    <StarVector />
                ))}
            </div>
            <div className="partners__cta u-d-flex">
                <Button
                    className="btn btn--outline btn--primary"
                    btnText="Read Review"
                    href="#"
                />
                <Button
                    className="btn--solid btn--primary"
                    btnText={buttonText}
                    href="#"
                />
            </div>
        </div>
    )
}

export default Partner
