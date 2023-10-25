const TableContentBlock = ({
    title,
    content,
    table_left_col_title,
    table_right_col_title,
    table_rows,
}: any) => {
    return (
        <section className="table-content-block">
            <div className="container">
                <div className="table-content-block__inner u-d-flex">
                    <div className="table-content-block__left">
                        <h2 className="h2">{title}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                    </div>

                    <div className="table-content-block__right">
                        <div className="table-content-block__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="h4">
                                            {table_left_col_title}
                                        </th>
                                        <th className="h4">
                                            {table_right_col_title}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table_rows.map((row: any) => (
                                        <tr>
                                            <td>{row.item_left}</td>
                                            <td>{row.item_right}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TableContentBlock
