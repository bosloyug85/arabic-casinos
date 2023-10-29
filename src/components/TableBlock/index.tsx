const TableBlock = ({ table_head_columns, table_rows }: any) => {
    return (
        <section className="type-table-block">
            <div className="container">
                <div className="type-table-block__table">
                    <table>
                        <thead>
                            <tr>
                                {table_head_columns &&
                                    table_head_columns.map((item: any) => (
                                        <th className="h4">{item.text}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table_rows &&
                                table_rows.map((row: any) => (
                                    <tr>
                                        {row.table_columns &&
                                            row.table_columns.map(
                                                (table_column: any) => (
                                                    <td>
                                                        {table_column.field_type ? (
                                                            <a
                                                                href={
                                                                    table_column
                                                                        .button
                                                                        .url
                                                                }
                                                            >
                                                                {
                                                                    table_column
                                                                        .button
                                                                        .title
                                                                }
                                                            </a>
                                                        ) : (
                                                            table_column.text
                                                        )}
                                                    </td>
                                                )
                                            )}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableBlock
