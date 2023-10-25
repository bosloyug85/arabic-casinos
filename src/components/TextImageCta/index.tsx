import Button from '../Button'
import ImageComponent from '../Image'

const TextImageCta = ({ items }: any) => {
    return (
        <section className="text-image-cta">
            <div className="container">
                <div className="text-image-cta__inner u-d-flex">
                    {items &&
                        items.map((item: any) => (
                            <div className="text-image-cta__wrapper u-d-flex">
                                <div className="left">
                                    <div className="image-wrapper">
                                        <ImageComponent
                                            className=""
                                            lazy={true}
                                            img_url={item.top_logo}
                                            desktop_img_url={item.top_logo}
                                            mobile_img_url={item.top_logo}
                                        />
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    ></div>
                                    <div className="icons-wrapper u-d-flex">
                                        {item.bottom_logos &&
                                            item.bottom_logos.map((_: any) => (
                                                <div className="image-wrapper">
                                                    <ImageComponent
                                                        className=""
                                                        lazy={true}
                                                        img_url={_.logo}
                                                        desktop_img_url={_.logo}
                                                        mobile_img_url={_.logo}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="right--inner">
                                        <div className="image-wrapper">
                                            <ImageComponent
                                                className=""
                                                lazy={true}
                                                img_url={
                                                    item.phone_screen_image
                                                }
                                                desktop_img_url={
                                                    item.phone_screen_image
                                                }
                                                mobile_img_url={
                                                    item.phone_screen_image
                                                }
                                            />
                                        </div>
                                        <Button
                                            btnText={item.cta.title}
                                            href={item.cta.url}
                                            className="btn--solid btn--primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default TextImageCta
