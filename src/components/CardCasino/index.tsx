import Button from '../Button'
import ImageComponent from '../Image'

const CardCasino = ({ item }: any) => {
    return (
        <div className="card-casino">
            <div className="card-casino__card-content">
                <div className="card-casino__image">
                    <h4 className="h4">{item.title}</h4>
                    <div className="media-wrapper">
                        <ImageComponent
                            className=""
                            lazy={true}
                            img_url={item.image}
                        />
                    </div>
                </div>
                <div className="card-casino__card-text">
                    <div className="card-casino__cta">
                        <Button
                            href={item.button.url}
                            btnText={item.button.title}
                            className="btn--solid btn--yellow"
                        />
                    </div>
                    {item.line_items.map((_: any) => (
                        <div className="card-casino__card-badge-text u-d-flex">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.498 8.542h6m0 0v6m0-6-6.5 6.5m9 6.558h-12a3.6 3.6 0 0 1-3.6-3.6V6a3.6 3.6 0 0 1 3.6-3.6h12a3.6 3.6 0 0 1 3.6 3.6v12a3.6 3.6 0 0 1-3.6 3.6Z"
                                    stroke="#E2CD8B"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <p>{_.line_item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardCasino
