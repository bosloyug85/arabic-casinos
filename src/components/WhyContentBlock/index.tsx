import React from 'react'
import ImageComponent from '../Image'
import thumbsUp from '../../static/images/hand-up.png'
import thumbsDown from '../../static/images/hand-down.png'

const WhyContentBlock = ({
    title,
    content,
    table_head_columns,
    table_rows,
}: any) => {
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
                        <div className="small-table">
                            <div className="small-table__thead">
                                {table_head_columns &&
                                    table_head_columns.map((item: any) => (
                                        <div className="small-table__thead-item">
                                            {item.icon === 'thumbs-up' ? (
                                                <ImageComponent
                                                    className=""
                                                    lazy={true}
                                                    img_url={thumbsUp.src}
                                                />
                                            ) : (
                                                <ImageComponent
                                                    className=""
                                                    lazy={true}
                                                    img_url={thumbsDown.src}
                                                />
                                            )}
                                            <h4 className="h4">{item.text}</h4>
                                        </div>
                                    ))}
                            </div>
                            <div className="small-table__body">
                                {table_rows &&
                                    table_rows.map((row: any) => (
                                        <div className="small-table__item u-d-flex">
                                            {row.table_columns &&
                                                row.table_columns.map(
                                                    (col: any) => (
                                                        <div className="small-table__item-col u-d-flex">
                                                            {col.icon ===
                                                            'check' ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="25"
                                                                    viewBox="0 0 24 25"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M21.6004 12.3571C21.6004 17.6591 17.3023 21.9571 12.0004 21.9571C6.69846 21.9571 2.40039 17.6591 2.40039 12.3571C2.40039 7.05521 6.69846 2.75714 12.0004 2.75714C13.5066 2.75714 14.9318 3.10401 16.2004 3.72222M19.8004 6.35714L11.4004 14.7571L9.00039 12.3571"
                                                                        stroke="#04DC33"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    width="24"
                                                                    height="25"
                                                                    fill="none"
                                                                >
                                                                    <g opacity="0.9">
                                                                        <path
                                                                            d="M8.39961 16.4571L15.5996 9.25714M11.9996 22.4571C6.69768 22.4571 2.39961 18.1591 2.39961 12.8571C2.39961 7.55521 6.69768 3.25714 11.9996 3.25714C17.3015 3.25714 21.5996 7.55521 21.5996 12.8571C21.5996 18.1591 17.3015 22.4571 11.9996 22.4571Z"
                                                                            stroke="#FF2222"
                                                                            stroke-width="2"
                                                                            stroke-linecap="round"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            )}
                                                            <p>{col.text}</p>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyContentBlock
