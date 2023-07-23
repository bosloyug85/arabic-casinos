import React from 'react'

const List = (props: any) => {
    const { listItems } = props
    return (
        <div style={{ display: 'block', width: '100%' }}>
            <h2>Top Online Casinos and Sportsbook</h2>
            {listItems.map((item: any, key: any) => (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                    key={key}
                >
                    <img src={item.logo} />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <h3>{item.text}</h3>
                        <p>{item.underText}</p>
                    </div>
                    <div>{item.rating}</div>
                    <button>Read Review</button>
                    <button>Play Now</button>
                </div>
            ))}
        </div>
    )
}

export default List
