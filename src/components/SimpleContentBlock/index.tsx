import React from 'react'

type SimpleContentBlockProps = {
    title: string
    content: string | JSX.Element
    highlight?: boolean
}

const SimpleContentBlock = ({
    title,
    content,
    highlight,
}: SimpleContentBlockProps) => {
    return (
        <section
            className={`simple-content-block ${
                highlight ? 'vip-loyality-contrast' : ''
            }`}
        >
            <div className="container">
                <div
                    className={`simple-content-block__inner ${
                        highlight ? 'vip-loyality-contrast__inner' : ''
                    }`}
                >
                    <h2 className="h2">
                        <span>{title}</span>
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </section>
    )
}

export default SimpleContentBlock
