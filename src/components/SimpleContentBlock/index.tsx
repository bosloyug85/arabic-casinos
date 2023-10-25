import React from 'react'
// import '../../static/scss/components/scroll-spy.scss'

type SimpleContentBlockProps = {
    title: string
    content: string | JSX.Element
}

const SimpleContentBlock = ({ title, content }: SimpleContentBlockProps) => {
    return (
        <section className="simple-content-block">
            <div className="container">
                <div className="simple-content-block__inner">
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
