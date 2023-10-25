import React from 'react'

const VipLoyaltyContrast = (props: any) => {
    const { title, description } = props
    return (
        <section className="vip-loyality-contrast">
            <div className="container">
                <div className="vip-loyality-contrast__inner">
                    <h2 className="h2">
                        <span>{title}</span>
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default VipLoyaltyContrast
