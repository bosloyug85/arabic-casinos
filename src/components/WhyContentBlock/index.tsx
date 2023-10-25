import React from 'react'

const WhyContentBlock = ({ title, content }: any) => {
    return (
        <section className="why-content-block">
            <div className="container">
                <div className="why-content-block__inner u-d-flex">
                    <div className="why-content-block__left">
                        <h2 className="h2">{title}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                    </div>
                    <div className="why-content-block__right">
                        {/* <?php get_partial('modules/small-table'); ?> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyContentBlock
