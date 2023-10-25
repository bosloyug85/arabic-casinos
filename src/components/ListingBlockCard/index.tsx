import React from 'react'
import ImageComponent from '../Image'
// import '../../static/scss/components/listing-block-card'

const ListingBlockCard = ({ card }: any) => {
    return (
        <div className="listing-block-card u-d-flex u-align-center">
            <div className="left">
                <div className="image-wrapper">
                    <ImageComponent
                        className=""
                        lazy={true}
                        img_url={card.image}
                        desktop_img_url={card.image}
                    />
                </div>
            </div>

            <div className="right">
                <h4 className="h4">{card.title}</h4>
                <div
                    dangerouslySetInnerHTML={{ __html: card.description }}
                ></div>
            </div>
        </div>
    )
}

export default ListingBlockCard
