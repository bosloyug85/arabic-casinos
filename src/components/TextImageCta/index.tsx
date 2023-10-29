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
                                            img_url={item.logo.url}
                                            desktop_img_url={item.logo.url}
                                            mobile_img_url={item.logo.url}
                                        />
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    ></div>
                                    <div className="icons-wrapper u-d-flex">
                                        {item.bottom_logos &&
                                            item.bottom_logos.map((_: any) => (
                                                <div className="image-wrapper">
                                                    <ImageComponent
                                                        className=""
                                                        lazy={true}
                                                        img_url={_.item.url}
                                                        desktop_img_url={
                                                            _.item.url
                                                        }
                                                        mobile_img_url={
                                                            _.item.url
                                                        }
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
                                                    item.mobile_screen_image.url
                                                }
                                                desktop_img_url={
                                                    item.mobile_screen_image.url
                                                }
                                                mobile_img_url={
                                                    item.mobile_screen_image.url
                                                }
                                            />
                                        </div>
                                        <Button
                                            btnText={item.button.title}
                                            href={item.button.url}
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
