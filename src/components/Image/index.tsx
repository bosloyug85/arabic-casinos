import React from 'react'

interface IImageProps {
    className: string
    img_url?: string
    mobile_img_url?: string
    desktop_img_url?: string
    lazy?: boolean
}

const ImageComponent = (props: IImageProps) => {
    const {
        lazy = true,
        desktop_img_url,
        mobile_img_url,
        img_url,
        className,
    } = props

    return (
        <picture>
            {desktop_img_url && (
                <source media="(min-width: 900px)" srcSet={desktop_img_url} />
            )}
            {mobile_img_url && (
                <source media="(min-width: 200px)" srcSet={mobile_img_url} />
            )}

            <img
                className={`u-image ${className || ''}`}
                {...(lazy ? { loading: 'lazy' } : {})}
                src={img_url}
                alt=""
                {...(lazy
                    ? { decoding: 'async', fetchPriority: 'low' }
                    : { fetchPriority: 'high' })}
            />
        </picture>
    )
}

export default ImageComponent
