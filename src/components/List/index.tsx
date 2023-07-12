import React from 'react'

const List = () => {
    const listItems = [
        {
            id: 1,
            logo: '/images/logo1.png',
            text: 'Welcome bonus up to €2000',
            underText: '+ 200 Free Spins',
            rating: 5,
        },
        {
            id: 2,
            logo: '/images/logo2.png',
            text: 'Welcome bonus up to €2000',
            underText: '+ 200 Free Spins',
            rating: 5,
        },
        {
            id: 3,
            logo: '/images/logo3.png',
            text: 'Welcome bonus up to €2000',
            underText: '+ 200 Free Spins',
            rating: 5,
        },
        {
            id: 4,
            logo: '/images/logo4.png',
            text: 'Welcome bonus up to €2000',
            underText: '+ 200 Free Spins',
            rating: 5,
        },
    ]

    return (
        <div style={{ display: 'block', width: '100%' }}>
            <h2>Top Online Casinos and Sportsbook</h2>
            {listItems.map((item, key) => (
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
