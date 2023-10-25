import React from 'react'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const GeneralTitle = (props: any) => {
    const { title, description } = props
    return (
        <section className="general-title u-text-center">
            <div className="container">
                <h2 className="h2">
                    <span>{title}</span>
                </h2>
                {description && <p>{description}</p>}
            </div>
        </section>
    )
}

export default GeneralTitle
