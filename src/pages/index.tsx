import { getNavigationItemsByMenuSlug, getPageBySlug } from '@/app/lib/api'
import GeneralTitle from '@/components/GeneralTitle'
import Hero from '@/components/Hero'
import RootLayout from '@/components/RootLayout'
import ScrollSpy from '@/components/ScrollSpy'
import React from 'react'

export const getServerSideProps = async ({ params }: any) => {
    // const page = await getPageBySlug(params.slug)
    const navigationItems = await getNavigationItemsByMenuSlug('header-menu')
    return { props: { navigationItems } }
}

const HomePage = () => {
    return (
        <RootLayout>
            <Hero
                title="The Best Arabic Casinos Online"
                content={
                    <>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis ultrices posuere felis, eu efficitur eros
                            dapibus a. Nunc rutrum fringilla metus, id aliquam
                            neque dignissim sit amet. Suspendisse tincidunt,
                            mauris in volutpat commodo, nulla tellus congue
                            tortor, vel tempus libero justo in justo tincidunt,
                            mauris in volutpat commodo.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis ultrices posuere felis, eu efficitur eros
                            dapibus a. Nunc rutrum fringilla metus, id aliquam
                            neque dignissim sit amet. Suspendisse tincidunt,
                            mauris in volutpat commodo, nulla tellus congue
                            tortor, vel tempus libero justo in justo tincidunt,
                            mauris in volutpat commodo.
                        </p>
                    </>
                }
                btnHref="#"
                btnText="See Top Online Casinos"
            />
            <ScrollSpy />
            <GeneralTitle title={'Top Online Casinos and Sportsbook'} />
        </RootLayout>
    )
}

export default HomePage
