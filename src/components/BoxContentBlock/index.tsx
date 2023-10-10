const BoxContentBlock = ({ title, content }: any) => {
    return (
        <section className="box-content-block">
            <div className="container u-d-flex">
                <div
                    className="box-content-block__left"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>

                <div className="box-content-block__right">
                    <h3>{title}</h3>
                </div>
            </div>
        </section>
    )
}

export default BoxContentBlock
