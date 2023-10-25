import BonusTypeCard from '../BonusTypeCard'

const CasinoBonusListing = ({ items }: any) => {
    return (
        <section className="casino-bonus-listing">
            <div className="container">
                {items.map((item: any) => (
                    <BonusTypeCard item={item} />
                ))}
            </div>
        </section>
    )
}

export default CasinoBonusListing
