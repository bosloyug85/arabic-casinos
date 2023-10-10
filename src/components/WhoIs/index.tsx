import React from 'react'
import GeneralTitle from '../GeneralTitle'
import BoxContentBlock from '../BoxContentBlock'

// interface IImageProps {
//     className: string
//     img_url?: string
//     mobile_img_url?: string
//     desktop_img_url?: string
//     lazy?: boolean
// }

const WhoIsModule = (props: any) => {
    const { title, description, textLeft, textRight } = props

    return (
        <>
            <GeneralTitle title={title} description={description} />
            <BoxContentBlock content={textLeft} title={textRight} />
        </>
    )
}

export default WhoIsModule
