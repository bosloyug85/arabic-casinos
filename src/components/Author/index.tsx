import React from 'react'
import ImageComponent from '../Image'

// type HeroProps = {
//     children?: JSX.Element[]
//     title: string
//     content: string | JSX.Element
//     btnHref?: string
//     btnText?: string
//     bgImage?: string
// }

const Author = (props: any) => {
    const { title, description, image } = props
    return (
        <section className="author">
            <div className="container">
                <div className="author__item u-d-flex u-align-center">
                    <div className="left">
                        <div className="image-wrapper">
                            <ImageComponent
                                img_url={image.url}
                                lazy={true}
                                className=""
                            />
                        </div>
                    </div>
                    <div className="right">
                        <h2 className="h3">{title}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author
