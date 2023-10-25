import ImageComponent from '../Image'

const TextImage = ({ title, text, image }: any) => {
    return (
        <section className="text-image">
            <div className="container">
                <div className="text-image__wrapper u-d-flex">
                    <div className="left">
                        <h2 className="h2">
                            <span>{title}</span>
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: text }}></div>
                    </div>
                    <div className="right">
                        <div className="right--inner">
                            <div className="image-wrapper">
                                <ImageComponent
                                    className=""
                                    lazy={true}
                                    img_url={image}
                                    mobile_img_url={image}
                                    desktop_img_url={image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextImage
