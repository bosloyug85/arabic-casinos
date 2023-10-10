import ImageComponent from '../Image'

const ContentListingBlock = ({ items }: any) => {
    return (
        <section className="content-listing-block">
            <div className="container">
                {items &&
                    items.map((item: any, index: number) => (
                        <div className="content-listing-block__item u-d-flex u-align-center">
                            {++index % 2 === 1 ? (
                                <>
                                    <div
                                        className="left"
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    ></div>

                                    <div className="right">
                                        <div className="image-wrapper">
                                            <ImageComponent
                                                lazy={true}
                                                img_url={item.image}
                                                mobile_img_url={item.image}
                                                desktop_img_url={item.image}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="left">
                                        <div className="image-wrapper">
                                            <ImageComponent
                                                lazy={true}
                                                img_url={item.image}
                                                mobile_img_url={item.image}
                                                desktop_img_url={item.image}
                                                className=""
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="right"
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    ></div>
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default ContentListingBlock
