import React from 'react'

const GeneralTitle = ({ title, description, leftAlign }: any) => {
    return (
        <>
            {leftAlign ? (
                <div className="left-title">
                    <div className="container">
                        <h2 className="h2">
                            <span>{title}</span>
                        </h2>
                        {description && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></div>
                        )}
                    </div>
                </div>
            ) : (
                <section className="general-title u-text-center">
                    <div className="container">
                        <h2 className="h2">
                            <span>{title}</span>
                        </h2>
                        {description && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></div>
                        )}
                    </div>
                </section>
            )}
        </>
    )
}

export default GeneralTitle
