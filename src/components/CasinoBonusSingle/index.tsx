import React from 'react'
import SingleBonusBlock from '../SingleBonusBlock'

const CasinoBonusSingle = ({
    description,
    banner_items,
    cta_title,
    cta_gold,
    cta,
}: any) => {
    return (
        <section className="casino-bonus-single">
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                <SingleBonusBlock
                    items={banner_items}
                    cta_gold={cta_gold}
                    cta={cta}
                    cta_title={cta_title}
                />
            </div>
        </section>
    )
}

export default CasinoBonusSingle
