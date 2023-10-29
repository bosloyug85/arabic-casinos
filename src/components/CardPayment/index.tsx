import React from 'react'
import ImageComponent from '../Image'
import Button from '../Button'

const CardPayment = ({ item, className }: any) => {
    return (
        <div className={`card-payments ${className ? className : ''}`}>
            <div className="card-payments__card-content">
                <div className="card-payments__image">
                    <div className="media-wrapper">
                        <ImageComponent
                            className=""
                            lazy={true}
                            img_url={item.image.url}
                        />
                    </div>
                </div>
                <div className="card-payments__card-text">
                    <h4 className="h4">{item.title}</h4>
                    {item.bullet_points.map((line: any) => (
                        <div className="card-payments__card-badge-text u-d-flex">
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
                            <p>{line.text}</p>
                        </div>
                    ))}
                </div>

                {item.btn ? (
                    <div className="card-payments__cta">
                        <Button
                            className="btn--solid btn--primary"
                            href={item.btn.url}
                            btnText={item.btn.title}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CardPayment
