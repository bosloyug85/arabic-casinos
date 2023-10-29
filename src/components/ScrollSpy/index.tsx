import React from 'react'

const ScrollSpy = ({ items }: any) => {
    return (
        <section className="scroll-spy js-scroll-spy">
            <div className="container">
                <nav className="scroll-spy__nav">
                    <ul className="u-d-flex u-align-center">
                        {items &&
                            items.map((item: any) => (
                                <li>
                                    <a
                                        href={item.link.url}
                                        className="u-d-flex u-align-center"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.5988 11.9994H11.9988M11.9988 11.9994H8.39883M11.9988 11.9994V15.5994M11.9988 11.9994L11.9988 8.39943M21.5984 5.99996L21.5984 18.0001C21.5984 19.9883 19.9867 21.6001 17.9984 21.6001H5.99844C4.01021 21.6001 2.39844 19.9883 2.39844 18.0001V5.99996C2.39844 4.01174 4.01021 2.39996 5.99844 2.39996H17.9984C19.9867 2.39996 21.5984 4.01174 21.5984 5.99996Z"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span>{item.link.title}</span>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default ScrollSpy
