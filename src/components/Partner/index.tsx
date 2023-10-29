import React from 'react'
import Button from '../Button'
import StarVector from '../StarVector'

const Partner = ({
    imgSrc,
    title,
    bonus,
    leftButton,
    rightButton,
    stars,
}: any) => {
    const createArrayFromNumber = (number: number) => {
        if (number <= 0) {
            return []
        }

        return Array.from({ length: number }, (_, i) => i + 1)
    }

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
                {createArrayFromNumber(stars).map((item: any) => (
                    <StarVector />
                ))}
            </div>
            <div className="partners__cta u-d-flex">
                <Button
                    className="btn btn--outline btn--primary"
                    btnText={leftButton.title}
                    href={leftButton.url}
                />
                <Button
                    className="btn--solid btn--primary"
                    btnText={rightButton.title}
                    href={rightButton.url}
                />
            </div>
        </div>
    )
}

export default Partner
