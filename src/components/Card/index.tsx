type CardProps = {
    image: string
    title: string
    description: string
    isSliderCard?: boolean
}

const Card = ({
    image,
    title,
    description,
    isSliderCard = false,
}: CardProps) => {
    return (
        <div className={isSliderCard ? 'card card--slider' : 'card'}>
            {isSliderCard ? <img src={image} alt="" /> : null}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card
