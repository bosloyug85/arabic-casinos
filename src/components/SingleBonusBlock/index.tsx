import React from 'react'
import Button from '../Button'

const SingleBonusBlock = ({
    title,
    description,
    items,
    cta,
    cta_gold,
    cta_title,
}: any) => {
    return (
        <div className="single-bonus-block">
            <div className="single-bonus-block__inner u-d-flex ">
                <div className="single-bonus-block__text">
                    {items.map((item: any) => (
                        <div className="single-bonus-block__text-item">
                            <h6>{item.left_title}</h6>
                            <p>{item.right_text}</p>
                        </div>
                    ))}
                </div>
                <div className="single-bonus-block__cta ">
                    <h2 className="h2">{cta_title}</h2>
                    {cta_gold ? (
                        <Button
                            className="btn--solid btn--yellow"
                            btnText={cta.title}
                            href={cta.url}
                        />
                    ) : (
                        <Button
                            className="btn--solid btn--primary"
                            btnText={cta.title}
                            href={cta.url}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleBonusBlock
