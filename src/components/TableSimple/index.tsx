import React from 'react'

const TableSimple = ({
    first_col_title,
    second_col_title,
    third_col_title,
    fourth_col_title,
    table_rows,
}: any) => {
    return (
        <section className="table-simple">
            <div className="container">
                <div className="table-simple__table">
                    <table>
                        <thead>
                            <tr>
                                <th className="h4">{first_col_title}</th>
                                <th className="h4">
                                    <span className="u-d-flex">
                                        {second_col_title}
                                    </span>
                                </th>
                                <th className="h4">
                                    <span className="u-d-flex">
                                        {third_col_title}
                                    </span>
                                </th>
                                <th className="h4">
                                    <span className="u-d-flex">
                                        {fourth_col_title}
                                    </span>
                                </th>
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
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableSimple
