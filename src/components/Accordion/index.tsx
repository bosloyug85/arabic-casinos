import React from 'react'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const Accordion = (props: any) => {
    const { items, className } = props
    return (
        <div className={`accordion ${className ? className : ''} js-accordion`}>
            {items.map((item: any) => (
                <div className="accordion-item">
                    <div className="accordion-title no-select js-accordion-trigger">
                        <p className="title">{item.title}</p>
                        <span className="indicator">
                            {/* <?php get_partial('icons/icon-arrow-down') ?> */}
                        </span>
                    </div>

                    <div className="accordion-content text-content js-accordion-content">
                        <div className="accordion-content__inner">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion
