import React from 'react'
import ImageComponent from '../Image'
import BasicCard from '../BasicCard'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const BasicCardsBlock = ({ cards }: any) => {
    return (
        <section className="basic-cards-block">
            <div className="container">
                {cards.map((card: any) => (
                    <BasicCard card={card} />
                ))}
            </div>
        </section>
    )
}

export default BasicCardsBlock
