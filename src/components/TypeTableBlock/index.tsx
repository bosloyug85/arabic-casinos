import React from 'react'

const TypeTableBlock = ({
    title,
    description,
    first_col_title,
    second_col_title,
    third_col_title,
    fourth_col_title,
    fifth_col_title,
    table_rows,
}: any) => {
    return (
        <section className="type-table-block">
            <div className="container">
                <h3 className="h3">{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className="type-table-block__table">
                    <table>
                        <thead>
                            <tr>
                                <th className="h4">{first_col_title}</th>
                                <th className="h4">{second_col_title}</th>
                                <th className="h4">{third_col_title}</th>
                                <th className="h4">{fourth_col_title}</th>
                                <th className="h4">{fifth_col_title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table_rows &&
                                table_rows.map((table_row: any) => (
                                    <tr>
                                        <td>{table_row.first_col_content}</td>
                                        <td>{table_row.second_col_content}</td>
                                        <td>{table_row.third_col_content}</td>
                                        <td>{table_row.fourth_col_content}</td>
                                        <td>
                                            <a
                                                href={
                                                    table_row.fifth_col_content
                                                        .url
                                                }
                                            >
                                                {
                                                    table_row.fifth_col_content
                                                        .title
                                                }
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TypeTableBlock
