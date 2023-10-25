import ImageComponent from '../Image'
// import '../../static/scss/components/_content-listing-block.scss'

const ContentListingBlock = ({ items }: any) => {
    return (
        <section className="content-listing-block">
            <div className="container">
                {items &&
                    items.map((item: any, index: number) => (
                        <div className="content-listing-block__item u-d-flex u-align-center">
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
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default ContentListingBlock
