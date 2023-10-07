import React from 'react'
import Partner from '../Partner'
import GeneralTitle from '../GeneralTitle'

const PartnersList = (props: any) => {
    const { listItems, title } = props
    return (
        <section className="partners-block">
            <GeneralTitle title={title} />
            <div className="container">
                {listItems.map((item: any, key: any) => (
                    <Partner
                        imgSrc={item.logo}
                        title={item.text}
                        bonus={item.text_under}
                        buttonText="Play Now"
                    />
                ))}
            </div>
        </section>
    )
}

export default PartnersList
