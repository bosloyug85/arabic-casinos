import React from 'react'
import CardPayment from '../CardPayment'

const PaymentMethod = ({ items }: any) => {
    return (
        <section className="payment-method">
            <div className="container">
                <div className="payment-method__inner u-d-flex">
                    {items.map((item: any, index: number) => (
                        <CardPayment key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PaymentMethod
