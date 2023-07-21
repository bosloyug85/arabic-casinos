import Hero from '@/components/Hero'
import List from '@/components/List'
import React from 'react'

const HomePage = () => {
    return (
        <div style={{ maxWidth: 'auto', width: 'auto' }}>
            <Hero
                title="The Best Arabic Casinos Online"
                reverse="row-reverse"
            />
            <Hero title="Another Best Arabic Casinos Online">
                <p>dasdas</p>
                <d>dasdasdsa</d>
            </Hero>
            <List />
        </div>
    )
}

export default HomePage
