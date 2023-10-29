import React from 'react'
import CardCriteria from '../CardCriteria'
// import "../../static/scss/components/_small-cards-grid.scss"
import GeneralTitle from '../GeneralTitle'

const SmallCardsGrid = ({ items }: { items: any[] }) => {
    return (
        <section className="small-cards-grid">
            <div className="container">
                <div className="small-cards-grid__inner u-d-flex">
                    {items.map((item: any, index: number) => (
                        <CardCriteria key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SmallCardsGrid
