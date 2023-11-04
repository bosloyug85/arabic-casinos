import React from 'react'
import ImageComponent from '../Image'
import Button from '../Button'

const InfoBlock = ({
    title,
    description,
    review,
    review_title,
    review_description,
    logo,
    button,
}: any) => {
    return (
        <section className="info">
            <div className="container">
                <div className="info__inner u-d-flex">
                    <div className="info__left">
                        <h1 className="h1">{title}</h1>
                        <div
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></div>
                    </div>
                    <div className="info__right">
                        <div className="info__box">
                            <div className="info__box-top">
                                <ImageComponent
                                    lazy={true}
                                    className=""
                                    img_url={logo.url}
                                />
                                <div className="info__stars u-d-flex">
                                    {/* <?php get_partial('icons/icon-star') ?>
                            <?php get_partial('icons/icon-star') ?>
                            <?php get_partial('icons/icon-star') ?>
                            <?php get_partial('icons/icon-star') ?>
                            <?php get_partial('icons/icon-star-empty') ?> */}
                                </div>
                                <span className="rating">
                                    {' '}
                                    Overall rating:{' '}
                                    <span className="rating-number">
                                        {review}/5{' '}
                                    </span>
                                </span>
                            </div>
                            <div className="info__box-bottom">
                                <h4 className="h4">{review_title}</h4>
                                <h3 className="h3">{review_description}</h3>
                            </div>
                            <Button
                                btnText={button['title']}
                                className="btn--solid btn--primary"
                                href={button['url']}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoBlock
