import React from 'react'
// import '../../static/scss/components/_left-title.scss'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const LeftTitle = (props: any) => {
    const { title, description } = props
    return (
        <div className="left-title">
            <div className="container">
                <h2 className="h2">
                    <span>{title}</span>
                </h2>
                {description && (
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default LeftTitle
