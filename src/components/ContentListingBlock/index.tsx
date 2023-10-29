import Button from '../Button'
import ImageComponent from '../Image'

const ContentListingBlock = ({ items, reverse, disable_cta }: any) => {
    return (
        <section className="content-listing-block">
            <div className="container">
                {items &&
                    items.map((item: any, index: number) => (
                        <div
                            key={index}
                            className={`content-listing-block__item ${
                                disable_cta ? 'disable-cta' : ''
                            } u-d-flex u-align-center ${
                                reverse ? '' : 'reverse-every'
                            }`}
                        >
                            <>
                                <div className="left">
                                    {item.title ? (
                                        <h3 className="h4">{item.title}</h3>
                                    ) : null}
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    ></div>
                                </div>

                                <div className="right">
                                    <div className="image-wrapper">
                                        <ImageComponent
                                            lazy={true}
                                            img_url={item.image.url}
                                            mobile_img_url={item.image.url}
                                            desktop_img_url={item.image.url}
                                            className=""
                                        />
                                        {!disable_cta ? (
                                            <Button
                                                className="btn--solid btn--primary"
                                                href="#"
                                                btnText="Get Bonus"
                                            />
                                        ) : null}
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
