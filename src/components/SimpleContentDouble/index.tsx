import React from 'react'
import ImageComponent from '../Image'

type SimpleContentDoubleProps = {
    top_title: string
    top_content: string | JSX.Element
    bottom_image: any
    bottom_title: string
    bottom_content: string | JSX.Element
}

const SimpleContentDouble = ({
    top_title,
    top_content,
    bottom_image,
    bottom_title,
    bottom_content,
}: SimpleContentDoubleProps) => {
    return (
        <section className="simple-content-double">
            <div className="container">
                <div className="simple-content-double__inner">
                    <div className="top">
                        <h2 className="h2">
                            <span>{top_title}</span>
                        </h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: top_content }}
                        ></div>
                    </div>
                    <div className="bottom">
                        <div className="bottom--image-title u-d-flex">
                            <div className="image-wrapper">
                                <ImageComponent
                                    className=""
                                    lazy={true}
                                    img_url={bottom_image.url}
                                    mobile_img_url={bottom_image.url}
                                    desktop_img_url={bottom_image.url}
                                />
                            </div>
                            <h2 className="h2">
                                <span>{bottom_title}</span>
                            </h2>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: bottom_content }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleContentDouble
