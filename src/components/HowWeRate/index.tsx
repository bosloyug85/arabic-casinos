import ContentListingBlock from '../ContentListingBlock'
import GeneralTitle from '../GeneralTitle'

const HowWeRate = ({ title, description, items }: any) => {
    return (
        <>
            <GeneralTitle title={title} description={description} />
            <ContentListingBlock items={items} />
        </>
    )
}

export default HowWeRate
