import React from 'react'
import ImageComponent from '../Image'

const BasicCard = ({ card }: any) => {
    return (
        <div className="basic-card u-d-flex u-align-center">
            <div className="left">
                <div className="image-wrapper">
                    <ImageComponent
                        className=""
                        lazy={true}
                        img_url={card.image}
                        desktop_img_url={card.image}
                        mobile_img_url={card.image}
                    />
                </div>
            </div>

            <div className="right">
                <h4 className="h4">{card.title}</h4>
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default BasicCard
