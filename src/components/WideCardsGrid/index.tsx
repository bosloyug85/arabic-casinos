import React from 'react'
import ListingBlockCard from '../ListingBlockCard'
import GeneralTitle from '../GeneralTitle'

const WideCardsGrid = ({ title, description, cards }: any) => {
    return (
        <section className="wide-cards-grid">
            <GeneralTitle title={title} description={description} />
            <div className="container">
                {cards.map((card: any) => (
                    <ListingBlockCard card={card} />
                ))}

                {/* <?php
                    get_partial('components/listing-block-card');
                    get_partial('components/listing-block-card');
                    get_partial('components/listing-block-card');
               ?> */}
            </div>
        </section>
    )
}

export default WideCardsGrid
