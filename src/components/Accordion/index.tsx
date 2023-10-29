import React from 'react'

const Accordion = ({ items, className }: any) => {
    return (
        <div className={`accordion ${className ? className : ''} js-accordion`}>
            {items.map((item: any) => (
                <div className="accordion-item">
                    <div className="accordion-title no-select js-accordion-trigger">
                        <p className="title">{item.text}</p>
                        <span className="indicator">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.8008 9.60039L12.0008 14.4004L7.20078 9.60039"
                                    stroke="#E2CD8B"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </div>

                    <div className="accordion-content text-content js-accordion-content">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                            className="accordion-content__inner"
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion
