import React from 'react'
import Partner from '../Partner'
import GeneralTitle from '../GeneralTitle'

const PartnersList = (props: any) => {
    const { listItems } = props
    return (
        <section className="partners-block">
            <div className="container">
                {listItems.map((item: any, index: any) => (
                    <Partner
                        key={index}
                        imgSrc={item.logo.url}
                        title={item.text}
                        bonus={item.small_text}
                        leftButton={item.left_button}
                        rightButton={item.right_button}
                        stars={item.stars}
                    />
                ))}
            </div>
        </section>
    )
}

export default PartnersList
