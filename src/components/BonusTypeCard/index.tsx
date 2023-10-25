import Button from '../Button'
import ImageComponent from '../Image'

const BonusTypeCard = ({ item }: any) => {
    const { title, description, cta, image } = item
    return (
        <div className="bonus-type-card">
            <div className="bonus-type-card__inner u-d-flex ">
                <div className="bonus-type-card__cta ">
                    <div className="image-wrapper">
                        <ImageComponent
                            className=""
                            lazy={true}
                            img_url={image}
                            desktop_img_url={image}
                            mobile_img_url={image}
                        />
                    </div>
                    {cta ? (
                        <Button
                            className="btn--solid btn--primary"
                            href={cta.url}
                            btnText={cta.title}
                        />
                    ) : null}
                </div>
                <div className="bonus-type-card__text">
                    {/* {items && items.map((item: any) => ( */}
                    <div className="bonus-type-card__text-item">
                        <h3 className="h3">{title}</h3>
                        <p>{description}</p>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    )
}

export default BonusTypeCard
